import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Tutorials')
export class Tutorial {
    @PrimaryColumn()
    id: number;

    @Column({length: 160})
    name: string;

    @Column({length: 100})
    author: string;

}