import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SoftwareDocument = Software & Document;

@Schema()
export class Software {
  @Prop({ required: true })
  name: string;

  @Prop()
  version: string;

  @Prop()
  description: string;
}

export const SoftwareSchema = SchemaFactory.createForClass(Software);
