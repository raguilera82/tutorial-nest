import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tutorial } from './tutorial.entity';

@Component()
export class TutorialsService {
    constructor(
        @InjectRepository(Tutorial) 
            private readonly tutorialsRepository: Repository<Tutorial>) {}

    async findAll(): Promise<Tutorial[]> {
        return await this.tutorialsRepository.find();
    }
}