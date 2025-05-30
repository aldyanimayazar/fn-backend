import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { RaceEventService } from './race-event.service';
import { CreateRaceEventDto } from './dto/create-race-event.dto';
import { UpdateRaceEventDto } from './dto/update-race-event.dto';

@Controller('race-events')
export class RaceEventController {
  constructor(private readonly raceEventService: RaceEventService) {}

  @Post()
  async create(@Body() dto: CreateRaceEventDto) {
    return this.raceEventService.create(dto);
  }

  @Get()
  async findAll() {
    return this.raceEventService.findAll();
  }

  @Get(':raceEventId')
  async findOne(@Param('raceEventId') raceEventId: string) {
    return this.raceEventService.findOne(raceEventId);
  }

  @Put(':raceEventId')
  async update(
    @Param('raceEventId') raceEventId: string,
    @Body() dto: UpdateRaceEventDto,
  ) {
    return this.raceEventService.update(raceEventId, dto);
  }

  @Delete(':raceEventId')
  async remove(@Param('raceEventId') raceEventId: string) {
    return this.raceEventService.remove(raceEventId);
  }
}
