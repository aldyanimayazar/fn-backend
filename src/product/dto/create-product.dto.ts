import {
    IsEnum,
    IsObject,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IBasePriceConversion } from '../interface/base-price-conversion.interface';
import { CurrencyUnitEnum } from '../enum/currency-unit.enum';
import { ICategory } from 'src/category/interface/category.interface';
import { IStock } from '../interface/stock.interface';
import { ProductConditionEnum, ProductStatusEnum } from '../enum/product-status.enum';
import { BasePriceDto } from './base-price.dto';
import { CategoryDto } from './catetgory.dto';
import { StockDto } from './stock.dtos';
import { VariantDto } from './variant.dto';
import { IVariant } from '../interface/variant.interface';
import { IDimension } from '../interface/dimension.interface';
import { IPreOrder } from '../interface/preorder.interface';
import { PreOrderDto } from './pre-order.dto';
import { DimensionDto } from './dimension.dto';

export class CreateProductDto {
    @IsObject()
    @ValidateNested()
    @Type(() => Object)
    basedPrice: IBasePriceConversion;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => Object)
    basedPriceConverted?: IBasePriceConversion;

    @IsObject()
    @ValidateNested()
    @Type(() => Object)
    netPrice: IBasePriceConversion;

    @IsEnum(CurrencyUnitEnum)
    currency: CurrencyUnitEnum;

    @IsObject()
    @ValidateNested()
    @Type(() => Object )
    category: ICategory;

    @IsString()
    productName: string;

    @IsOptional()
    @IsString()
    productDescription?: string;

    @IsObject()
    @ValidateNested()
    @Type(() => Object )
    stock: IStock;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => Object )
    variant?: IVariant;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => Object )
    preOrder?: IPreOrder;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => Object)
    dimension?: IDimension;

    @IsOptional()
    @IsEnum(ProductConditionEnum)
    productCondition?: ProductConditionEnum;

    @IsOptional()
    @IsEnum(ProductStatusEnum)
    productStatus?: ProductStatusEnum;
}
