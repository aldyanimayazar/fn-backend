import { Test, TestingModule } from '@nestjs/testing';
import { RaceEventService } from './race-event.service';

describe('RaceEventService', () => {
  let service: RaceEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaceEventService],
    }).compile();

    service = module.get<RaceEventService>(RaceEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
