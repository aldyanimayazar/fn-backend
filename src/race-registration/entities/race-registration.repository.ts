import { InjectModel } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { AbstractRepository } from 'src/database/abstract.repository';
import { RaceRegistrationDocuments } from './race-registration.model';

export class RaceRegistrationRepository extends AbstractRepository<RaceRegistrationDocuments> {
  protected readonly logger = new Logger(RaceRegistrationRepository.name);

  constructor(
    @InjectModel(RaceRegistrationDocuments.name)
    raceRegistrationModel: Model<RaceRegistrationDocuments>,
  ) {
    super(raceRegistrationModel);
  }
}