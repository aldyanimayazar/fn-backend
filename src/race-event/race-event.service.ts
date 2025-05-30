import { Injectable, NotFoundException } from '@nestjs/common';
import { RaceEventRepository } from './model/race-event.repository';
import { CreateRaceEventDto } from './dto/create-race-event.dto';
import { UpdateRaceEventDto } from './dto/update-race-event.dto';
import { RaceEventDocuments } from './model/race-event.schema';
import { IRaceEvent } from './interface/race-event.interface';
import { nanoid } from 'nanoid';

@Injectable()
export class RaceEventService {
  constructor(private readonly raceEventRepository: RaceEventRepository) {}

  async create(dto: CreateRaceEventDto): Promise<RaceEventDocuments> {
  const newRaceEvent = {
    ...dto,
    raceId: nanoid(), // generate raceId here
  };
  return await this.raceEventRepository.create(newRaceEvent);
}

  async findAll(): Promise<Record<string, IRaceEvent>[]> {
    return await this.raceEventRepository.find({});
  }

  async findOne(raceEventId: string): Promise<RaceEventDocuments> {
    const found = await this.raceEventRepository.findOne({ raceEventId });
    if (!found) {
      throw new NotFoundException('Race event not found');
    }
    return found;
  }

  async update(raceEventId: string, dto: UpdateRaceEventDto): Promise<RaceEventDocuments> {
    return await this.raceEventRepository.findOneAndUpdate({ raceEventId }, dto);
  }

  async remove(raceEventId: string): Promise<void> {
    await this.raceEventRepository.findOneAndDelete({ raceEventId });
  }
}
