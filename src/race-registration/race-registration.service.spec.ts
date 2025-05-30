import { Test, TestingModule } from '@nestjs/testing';
import { RaceRegistrationService } from './race-registration.service';

describe('RaceRegistrationService', () => {
  let service: RaceRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaceRegistrationService],
    }).compile();

    service = module.get<RaceRegistrationService>(RaceRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
