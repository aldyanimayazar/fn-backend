import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaceRegistrationService } from './race-registration.service';
import { CreateRaceRegistrationDto } from './dto/create-race-registration.dto';
import { UpdateRaceRegistrationDto } from './dto/update-race-registration.dto';

@Controller('race-registration')
export class RaceRegistrationController {
  constructor(private readonly raceRegistrationService: RaceRegistrationService) {}

 @Post()
  create(@Body() dto: CreateRaceRegistrationDto) {
    return this.raceRegistrationService.create(dto);
  }

  @Get()
  findAll() {
    return this.raceRegistrationService.findAll();
  }

  @Get('race/:raceEventId')
  findByRace(@Param('raceEventId') raceEventId: string) {
    return this.raceRegistrationService.findByRace(raceEventId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRaceRegistrationDto: UpdateRaceRegistrationDto) {
    return this.raceRegistrationService.update(id, updateRaceRegistrationDto);
  }
}
