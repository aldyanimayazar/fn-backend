import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { nanoid } from "nanoid";
import { ICategory } from "../../category/interface/category.interface";
import { CategorySchema } from "../../category/entities/category.schema";

@Schema({timestamps: true, collection: 'products'})
export class ProductDocuments {

    @Prop({type: String, default: nanoid})
    productId: string;

    @Prop()
    basicPrice: number;

    @Prop()
    netPrice: number;

    @Prop()
    currency: number;

    @Prop({type: CategorySchema})
    category: ICategory;
}

export const ProductSchema = SchemaFactory.createForClass(ProductDocuments);