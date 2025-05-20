import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RolesRepository } from './model/roles.repository';
import { DatabaseModule } from 'src/database/database.module';
import { RolesDocuments, RoleSchema } from './model/role.schema';

@Module({
  imports: [
    DatabaseModule.forFeature([
      { name: RolesDocuments.name, schema: RoleSchema },
    ]),
  ],
  controllers: [RolesController],
  providers: [RolesService,RolesRepository],
  exports: [RolesService, RolesRepository],
})
export class RolesModule {}
