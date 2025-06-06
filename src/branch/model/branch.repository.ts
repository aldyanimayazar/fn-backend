import { Injectable, Logger } from '@nestjs/common';

import { AbstractRepository } from 'src/database/abstract.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BranchDocuments } from './branch.schema';

@Injectable()
export class BranchRepository extends AbstractRepository<BranchDocuments> {
  protected readonly logger: Logger = new Logger(BranchDocuments.name);
  
  constructor(
    @InjectModel(BranchDocuments.name)
    branchModel: Model<BranchDocuments>,
  ) {
    super(branchModel);
  }

  // You can extend with custom query methods here if needed
}
