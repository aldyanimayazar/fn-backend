import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";
import { nanoid } from "nanoid";

@Schema({ timestamps: true, collection: 'race_registrations' })
export class RaceRegistrationDocuments extends AbstractDocument {
  @Prop({ type: String, default: () => nanoid() })
  registrationId: string;

  @Prop({ required: true })
  raceEventId: string;

  @Prop({ required: true })
  memberId: string;

  @Prop({ enum: ['INDIVIDUAL', 'TEAM'], required: true })
  registrationType: 'INDIVIDUAL' | 'TEAM';

  @Prop({ required: true })
  registeredSlotCount: number;

  @Prop()
  topUpSlotCount?: number;

  @Prop({ default: false })
  isEarlyBird: boolean;

  @Prop({ required: true })
  totalPaid: number;
}

export const RaceRegistrationSchema = SchemaFactory.createForClass(RaceRegistrationDocuments);
