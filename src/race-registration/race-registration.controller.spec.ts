import { Test, TestingModule } from '@nestjs/testing';
import { RaceRegistrationController } from './race-registration.controller';
import { RaceRegistrationService } from './race-registration.service';

describe('RaceRegistrationController', () => {
  let controller: RaceRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaceRegistrationController],
      providers: [RaceRegistrationService],
    }).compile();

    controller = module.get<RaceRegistrationController>(RaceRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
