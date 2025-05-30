import { IsString, IsEnum, IsNumber, IsDateString } from "class-validator";
import { RaceMode, RaceStatus } from "../enum/race-event.enum";

export class CreateRaceEventDto {
  @IsString()
  name: string;

  @IsEnum(RaceMode)
  mode: RaceMode;

  @IsNumber()
  slotLimit: number;

  @IsNumber()
  earlyBirdExtra: number;

  @IsDateString()
  earlyBirdDeadline: Date;

  @IsNumber()
  registrationFee: number;

  @IsNumber()
  topUpFeePer10Slots: number;

  @IsDateString()
  startTime: Date;

  @IsEnum(RaceStatus)
  status: RaceStatus;
}
