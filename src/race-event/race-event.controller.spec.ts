import { Test, TestingModule } from '@nestjs/testing';
import { RaceEventController } from './race-event.controller';
import { RaceEventService } from './race-event.service';

describe('RaceEventController', () => {
  let controller: RaceEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaceEventController],
      providers: [RaceEventService],
    }).compile();

    controller = module.get<RaceEventController>(RaceEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
