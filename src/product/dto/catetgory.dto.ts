import { IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  caregoryId: string;

  @IsString()
  categoryName: string;
}
