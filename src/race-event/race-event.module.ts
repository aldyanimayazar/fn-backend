import { Module } from '@nestjs/common';
import { RaceEventService } from './race-event.service';
import { RaceEventController } from './race-event.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RolesModule } from 'src/roles/roles.module';
import { RaceEventDocuments, RaceEventSchema } from './model/race-event.schema';
import { RaceEventRepository } from './model/race-event.repository';

@Module({
  imports: [
        DatabaseModule.forFeature([
          { name: RaceEventDocuments.name, schema: RaceEventSchema },
        ]),
        RolesModule,
      ],
  controllers: [RaceEventController],
  providers: [RaceEventService, RaceEventRepository],
})
export class RaceEventModule {}
