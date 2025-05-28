import { IsBoolean, IsEnum, IsNumber } from 'class-validator';
import { Days } from '../enum/time-unit.enum';

export class PreOrderDto {
  @IsBoolean()
  isPreOrder: boolean;

  @IsNumber()
  duration: number;

  @IsEnum(Days)
  unit: Days;
}
