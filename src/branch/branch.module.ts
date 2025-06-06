import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RolesModule } from 'src/roles/roles.module';
import { BranchDocuments, BranchSchema } from './model/branch.schema';
import { BranchRepository } from './model/branch.repository';

@Module({
  imports: [
        DatabaseModule.forFeature([
          { name: BranchDocuments.name, schema: BranchSchema },
        ]),
        RolesModule,
      ],
  controllers: [BranchController],
  providers: [BranchService, BranchRepository],
})
export class BranchModule {}
