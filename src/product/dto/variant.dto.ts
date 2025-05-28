import { IsBoolean, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { VariantChildrenDto } from './variant-children.dto';

export class VariantDto {
  @IsBoolean()
  isParent: boolean;

  @IsNumber()
  isVariant: number;

  @ValidateNested()
  @Type(() => VariantChildrenDto)
  childrenID: VariantChildrenDto;
}
