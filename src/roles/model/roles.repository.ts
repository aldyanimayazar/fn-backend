import { Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/database/abstract.repository';
import { RolesDocuments } from './role.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class RolesRepository extends AbstractRepository<RolesDocuments> {
  protected readonly logger: Logger = new Logger(RolesRepository.name);
  constructor(
    @InjectModel(RolesDocuments.name) rolesModel: Model<RolesDocuments>,
  ) {
    super(rolesModel);
  }
}
