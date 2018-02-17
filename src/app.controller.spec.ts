import { AppController } from './app.controller';
import { Test } from '@nestjs/testing';

describe('App controller', () => {
  let appController: AppController;


  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [AppController]
    }).compile();

    appController = module.get<AppController>(AppController);

  });

  it('should show message', async () => {
    const result = 'NestJS Rocks';
    expect(await appController.root()).toBe(result);
  });

})