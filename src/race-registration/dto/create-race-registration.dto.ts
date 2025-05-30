import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRaceRegistrationDto {
  @IsString()
  raceEventId: string;

  @IsString()
  memberId: string;

  @IsEnum(['INDIVIDUAL', 'TEAM'])
  registrationType: 'INDIVIDUAL' | 'TEAM';

  @IsNumber()
  registeredSlotCount: number;

  @IsOptional()
  @IsNumber()
  topUpSlotCount?: number;

  @IsBoolean()
  isEarlyBird: boolean;

  @IsNumber()
  totalPaid: number;
}
