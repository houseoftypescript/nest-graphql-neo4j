import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '../health.controller';

describe('HealthController', () => {
  let healthController: HealthController;

  beforeEach(async () => {
    const health: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    healthController = health.get<HealthController>(HealthController);
  });

  describe('/health', () => {
    it('should return status OK', async () => {
      const response = healthController.getHealth();
      expect(response).toEqual({ status: 'OK' });
    });
  });
});
