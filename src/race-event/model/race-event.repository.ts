// src/race-event/model/race-event.repository.ts

import { AbstractRepository } from 'src/database/abstract.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { RaceEventDocuments } from './race-event.schema';

export class RaceEventRepository extends AbstractRepository<RaceEventDocuments> {
  protected readonly logger: Logger = new Logger(RaceEventRepository.name);

  constructor(
    @InjectModel(RaceEventDocuments.name)
    raceEventModel: Model<RaceEventDocuments>,
  ) {
    super(raceEventModel);
  }
}
