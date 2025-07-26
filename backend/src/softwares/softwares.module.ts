import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SoftwaresController } from './softwares.controller';
import { SoftwaresService } from './softwares.service';
import { Software, SoftwareSchema } from './schemas/software.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Software.name, schema: SoftwareSchema }])],
  controllers: [SoftwaresController],
  providers: [SoftwaresService],
})
export class SoftwaresModule {}
