import { IsEnum, IsNumber } from 'class-validator';
import { CurrencyUnitEnum } from '../enum/currency-unit.enum';

export class BasePriceDto {
  @IsNumber()
  basedPriceValue: number;

  @IsNumber()
  conversionRateUsed: number;

  @IsEnum(CurrencyUnitEnum)
  currencyUnit: CurrencyUnitEnum;
}
