import { Test } from '@nestjs/testing';

import { TutorialsController } from './tutorials.controller';
import { TUTORIALS_DATA } from './tutorials.data';
import { TutorialsService } from './tutorials.service';
import { TutorialsServiceFake } from './tutorials.service.fake';

describe('TutorialsController', () => {
    let tutorialsController: TutorialsController;
    let tutorialsService: TutorialsService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [TutorialsController],
            components: [
                {provide: TutorialsService, useClass: TutorialsServiceFake}
            ],
        }).compile();

        tutorialsService = module.get<TutorialsService>(TutorialsService);
        tutorialsController = module.get<TutorialsController>(TutorialsController);
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const result = TUTORIALS_DATA;
            expect(await tutorialsController.findAll()).toBe(result);
        });
    });
});