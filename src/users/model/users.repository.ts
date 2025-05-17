import { AbstractRepository } from 'src/database/abstract.repository';
import { UserDocuments } from './user.schema';
import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class UsersRepository extends AbstractRepository<UserDocuments> {
  protected readonly logger: Logger = new Logger(UsersRepository.name);
  constructor(
    @InjectModel(UserDocuments.name) userModel: Model<UserDocuments>,
  ) {
    super(userModel);
  }
}
