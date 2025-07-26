import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async register(dto: RegisterDto) {
    const userExists = await this.userModel.findOne({ email: dto.email });
    if (userExists) throw new ConflictException('Email đã được đăng ký');

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser = new this.userModel({
      email: dto.email,
      password: hashedPassword,
    });
    await newUser.save();

    return { message: 'Đăng ký thành công' };
  }

  async login(dto: LoginDto) {
    const user = await this.userModel.findOne({ email: dto.email });
    if (!user) throw new UnauthorizedException('Tài khoản không tồn tại');

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Mật khẩu sai');

    const payload = { sub: user._id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }
}
