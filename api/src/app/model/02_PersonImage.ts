import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Person from './02_Person';

@Entity('PersonImage')

class Image {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string;

    @ManyToOne(() => Person, (person) => person.Image)
    @JoinColumn({ name: 'person_id' })
    person: Person
}

export default Image;
