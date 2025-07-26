import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoftwaresModule } from './softwares/softwares.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // Thêm dòng này để chỉ định file .env
    }),
    MongooseModule.forRoot(process.env.MONGO_URI ?? ''), // Đảm bảo không truyền undefined
    SoftwaresModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}