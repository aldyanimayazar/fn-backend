import { Injectable } from '@nestjs/common';
import { CreateRaceRegistrationDto } from './dto/create-race-registration.dto';
import { nanoid } from 'nanoid';
import { RaceRegistrationDocuments } from './entities/race-registration.model';
import { RaceRegistrationRepository } from './entities/race-registration.repository';
import { UpdateRaceRegistrationDto } from './dto/update-race-registration.dto';

@Injectable()
export class RaceRegistrationService {
  constructor(
    private readonly registrationRepository: RaceRegistrationRepository,
  ) {}

  async create(dto: CreateRaceRegistrationDto): Promise<RaceRegistrationDocuments> {
    return this.registrationRepository.create({
      registrationId: nanoid(),
      ...dto,
    });
  }

  async findAll(): Promise<Record<string, any>[]> {
    return this.registrationRepository.find({});
  }

  async findByRace(raceEventId: string): Promise<Record<string, any>[]> {
    return this.registrationRepository.find({ raceEventId });
  }

  async update(raceEventId: string, dto: UpdateRaceRegistrationDto): Promise<RaceRegistrationDocuments> {
    return await this.registrationRepository.findOneAndUpdate({ raceEventId }, dto);
  }
}
