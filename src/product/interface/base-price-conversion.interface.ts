import { CurrencyUnitEnum } from "../enum/currency-unit.enum";

export interface IBasePriceConversion {
    basedPriceValue: number;
    conversionRateUsed: number;
    currencyUnit: CurrencyUnitEnum;
}