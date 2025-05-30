// ================= Controller =================

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RaceRegistrationService } from './race-registration.service';
import { CreateRaceRegistrationDto } from './dto/create-race-registration.dto';

@Controller('race-registrations')
export class RaceRegistrationController {
  constructor(private readonly registrationService: RaceRegistrationService) {}

  @Post()
  create(@Body() dto: CreateRaceRegistrationDto) {
    return this.registrationService.create(dto);
  }

  @Get()
  findAll() {
    return this.registrationService.findAll();
  }

  @Get('race/:raceEventId')
  findByRace(@Param('raceEventId') raceEventId: string) {
    return this.registrationService.findByRace(raceEventId);
  }
}
