import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { nanoid } from "nanoid";
import { ICategory } from "../../category/interface/category.interface";
import { CategorySchema } from "../../category/entities/category.schema";
import { IStock } from "../interface/stock.interface";
import { IVariant } from "../interface/variant.interface";
import { IPreOrder } from "../interface/preorder.interface";
import { IDimension } from "../interface/dimension.interface";
import { ProductConditionEnum, ProductStatusEnum } from "../enum/product-status.enum";

@Schema({timestamps: true, collection: 'products'})
export class ProductDocuments {

    @Prop({type: String, default: nanoid})
    productId: string;

    @Prop()
    basedPrice: number;

    @Prop()
    netPrice: number;

    @Prop()
    currency: number;

    @Prop({type: CategorySchema})
    category: ICategory;

    @Prop()
    productName: string;

    @Prop()
    productDescription: string;

    @Prop()
    stock: IStock;

    @Prop()
    variant: IVariant;

    @Prop()
    preOrder: IPreOrder;

    @Prop()
    dimension: IDimension;

    @Prop()
    productCondition: ProductConditionEnum;

    @Prop()
    productStatus: ProductStatusEnum;
}

export const ProductSchema = SchemaFactory.createForClass(ProductDocuments);