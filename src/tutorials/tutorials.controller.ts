import { Controller, Get } from '@nestjs/common';

import { Tutorial } from './tutorial.entity';
import { TutorialsService } from './tutorials.service';

@Controller('tutorials')
export class TutorialsController {

    constructor(private readonly tutorialsService: TutorialsService) {}

    @Get()
    findAll(): Promise<Tutorial[]> {
        return this.tutorialsService.findAll();
    }

}
