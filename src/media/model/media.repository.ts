import { AbstractRepository } from 'src/database/abstract.repository';
import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { MediaDocuments } from './media.schema';

export class MediaRepository extends AbstractRepository<MediaDocuments> {
  protected readonly logger: Logger = new Logger(MediaRepository.name);

  constructor(
    @InjectModel(MediaDocuments.name) mediaModel: Model<MediaDocuments>,
  ) {
    super(mediaModel);
  }

  // ✅ Add a new lean query method
  async findOneLean(
    filterQuery: FilterQuery<MediaDocuments>
  ): Promise<Record<string, any> | null> {
    return await this.model.findOne(filterQuery).lean();
  }

  async findLean(
    filterQuery: FilterQuery<MediaDocuments>
  ): Promise<Record<string, any>[]> {
    return await this.model.find(filterQuery).lean();
  }
}
