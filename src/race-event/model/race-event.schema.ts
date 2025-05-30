import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';
import { nanoid } from 'nanoid';
import { RaceMode, RaceStatus } from '../enum/race-event.enum';

@Schema({ timestamps: true, collection: 'race_events' })
export class RaceEventDocuments extends AbstractDocument {
  @Prop({ type: String, default: nanoid })
  raceId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: String, enum: RaceMode, required: true })
  mode: RaceMode;

  @Prop({ required: true })
  slotLimit: number;

  @Prop({ required: true })
  earlyBirdExtra: number;

  @Prop({ type: Date, required: true })
  earlyBirdDeadline: Date;

  @Prop({ required: true })
  registrationFee: number;

  @Prop({ required: true })
  topUpFeePer10Slots: number;

  @Prop({ type: Date, required: true })
  startTime: Date;

  @Prop({ type: String, enum: RaceStatus, default: RaceStatus.OPEN })
  status: RaceStatus;
}

export const RaceEventSchema = SchemaFactory.createForClass(RaceEventDocuments);