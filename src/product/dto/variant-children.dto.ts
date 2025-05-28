import { IsArray, IsString } from 'class-validator';

export class VariantChildrenDto {
  @IsString()
  variantChildId: string;

  @IsArray()
  picturesId: number[];

  @IsString()
  additionalPrice: string;
}
