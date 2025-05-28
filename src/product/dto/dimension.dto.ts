import { IsEnum, IsNumber } from 'class-validator';
import { UnitWeight, UnitMeasurement } from '../enum/time-unit.enum';

export class DimensionDto {
  @IsNumber()
  weightValue: number;

  @IsEnum(UnitWeight)
  weightUnit: UnitWeight;

  @IsNumber()
  dimensionValue: number;

  @IsEnum(UnitMeasurement)
  dimensionUnit: UnitMeasurement;
}
