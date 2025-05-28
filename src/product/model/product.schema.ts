import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { nanoid } from "nanoid";
import { ICategory } from "../../category/interface/category.interface";
import { CategorySchema } from "../../category/entities/category.schema";
import { IStock } from "../interface/stock.interface";
import { IVariant } from "../interface/variant.interface";
import { IPreOrder } from "../interface/preorder.interface";
import { IDimension } from "../interface/dimension.interface";
import { ProductConditionEnum, ProductStatusEnum } from "../enum/product-status.enum";
import { CurrencyUnitEnum } from "../enum/currency-unit.enum";
import { IBasePriceConversion } from "../interface/base-price-conversion.interface";
import { AbstractDocument } from "src/database/abstract.schema";

@Schema({timestamps: true, collection: 'products'})
export class ProductDocuments extends AbstractDocument{

    @Prop({default: () => nanoid() })
    productId: string;

    @Prop({ type: Object })
    basedPrice: IBasePriceConversion;

    @Prop({ type: Object })
    basedPriceConverted: IBasePriceConversion;

    @Prop({ type: Object })
    netPrice: IBasePriceConversion;

    @Prop({ type: Object })
    currency: CurrencyUnitEnum;

    @Prop({type: CategorySchema})
    category: ICategory;

    @Prop()
    productName: string;

    @Prop()
    productDescription: string;

    @Prop({ type: Object })
    stock: IStock;

    @Prop({ type: Object })
    variant: IVariant;

    @Prop({ type: Object })
    preOrder: IPreOrder;

    @Prop({ type: Object })
    dimension: IDimension;

    @Prop({ type: String, enum: ProductConditionEnum })
    productCondition: ProductConditionEnum;

    @Prop({ type: String, enum: ProductStatusEnum })
    productStatus: ProductStatusEnum;
}

export const ProductSchema = SchemaFactory.createForClass(ProductDocuments);