import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { TutorialsModule } from './tutorials/tutorials.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TutorialsModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}

