import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Software, SoftwareDocument } from './schemas/software.schema';
import { Model } from 'mongoose';

@Injectable()
export class SoftwaresService {
  constructor(
    @InjectModel(Software.name)
    private softwareModel: Model<SoftwareDocument>,
  ) {}

  async findById(id: string): Promise<Software | null> {
    return this.softwareModel.findById(id).exec();
  }
}
