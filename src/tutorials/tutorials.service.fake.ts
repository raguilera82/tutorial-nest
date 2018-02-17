import { TUTORIALS_DATA } from './tutorials.data';
import { Component } from '@nestjs/common';

import { Tutorial } from './tutorial.entity';

@Component()
export class TutorialsServiceFake {
    constructor() {}

    async findAll(): Promise<Tutorial[]> {
        return await TUTORIALS_DATA;
    }
}