import { IsMongoId } from 'class-validator';

export class GetSoftwareDto {
  @IsMongoId({ message: 'ID không hợp lệ' })
  id: string;
}
