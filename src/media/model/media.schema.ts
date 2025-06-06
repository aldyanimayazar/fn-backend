import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { nanoid } from "nanoid";
import { AbstractDocument } from "src/database/abstract.schema";

@Schema({ timestamps: true, collection: 'media' })
export class MediaDocuments extends AbstractDocument {

    @Prop({ default: () => nanoid() })
    pictureId: string;

    @Prop()
    fileName: string; // original file name

    @Prop()
    mimeType: string; // e.g. 'image/png'

    @Prop()
    fileSize: number; // in bytes

    @Prop()
    fileUrl: string; // full public URL or internal path

    @Prop()
    uploadedBy: string; // userId of SHOP_KEEPER

    @Prop()
    usedIn: string; // e.g. 'product-123' or 'variant-xyz'

    @Prop({ default: false })
    isDeleted: boolean;
}

export const MediaSchema = SchemaFactory.createForClass(MediaDocuments);