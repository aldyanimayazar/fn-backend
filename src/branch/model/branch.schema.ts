import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';

@Schema({ timestamps: true, collection: 'branches' })
export class BranchDocuments extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string; // city, district, or coordinates later

  @Prop({ required: false })
  description?: string;
}

export const BranchSchema = SchemaFactory.createForClass(BranchDocuments);