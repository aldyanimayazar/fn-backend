export interface IRaceRegistration {
  registrationId: string;
  raceEventId: string;
  memberId: string;
  registrationType: 'INDIVIDUAL' | 'TEAM';
  registeredSlotCount: number;
  topUpSlotCount?: number;
  isEarlyBird: boolean;
  totalPaid: number;
}
