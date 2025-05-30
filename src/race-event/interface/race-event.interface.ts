import { RaceMode, RaceStatus } from "../enum/race-event.enum";

export interface IRaceEvent {
  raceId: string;
  name: string;
  mode: RaceMode;
  slotLimit: number;
  earlyBirdExtra: number;
  earlyBirdDeadline: Date;
  registrationFee: number;
  topUpFeePer10Slots: number;
  startTime: Date;
  status: RaceStatus;
}
