import { Module } from '@nestjs/common';
import { RaceRegistrationService } from './race-registration.service';
import { RaceRegistrationController } from './race-registration.controller';

@Module({
  controllers: [RaceRegistrationController],
  providers: [RaceRegistrationService],
})
export class RaceRegistrationModule {}
