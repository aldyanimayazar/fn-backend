import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { nanoid } from "nanoid";
import { AbstractDocument } from "src/database/abstract.schema";

@Schema({timestamps: true, collection: 'products'})

export class CategoryDocuments extends AbstractDocument{
    @Prop({type: String, default: nanoid})
    caregoryId: string;

    @Prop()
    categoryName: string;
}


export const CategorySchema = SchemaFactory.createForClass(CategoryDocuments);