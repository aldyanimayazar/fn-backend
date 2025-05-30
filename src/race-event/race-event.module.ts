import { Module } from '@nestjs/common';
import { RaceEventService } from './race-event.service';
import { RaceEventController } from './race-event.controller';

@Module({
  controllers: [RaceEventController],
  providers: [RaceEventService],
})
export class RaceEventModule {}
