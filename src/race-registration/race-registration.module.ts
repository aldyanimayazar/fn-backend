import { Module } from '@nestjs/common';
import { RaceRegistrationService } from './race-registration.service';
import { RaceRegistrationController } from './race-registration.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProductDocuments, ProductSchema } from 'src/product/model/product.schema';
import { RolesModule } from 'src/roles/roles.module';
import { RaceRegistrationDocuments, RaceRegistrationSchema } from './entities/race-registration.model';
import { RaceRegistrationRepository } from './entities/race-registration.repository';

@Module({
  imports: [
    DatabaseModule.forFeature([
      { name: RaceRegistrationDocuments.name, schema: RaceRegistrationSchema },
    ]),
    RolesModule,
  ],
  controllers: [RaceRegistrationController],
  providers: [RaceRegistrationService, RaceRegistrationRepository],
})
export class RaceRegistrationModule { }
