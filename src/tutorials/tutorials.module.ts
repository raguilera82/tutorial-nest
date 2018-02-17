import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tutorial } from './tutorial.entity';
import { TutorialsController } from './tutorials.controller';
import { TutorialsService } from './tutorials.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tutorial])],
    components: [TutorialsService],
    controllers: [TutorialsController]
})
export class TutorialsModule {}