import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Person from './02_Person';

@Entity('PersonImage') 

class PersonImage {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column() 
    path: string; 

    @ManyToOne(() => Person, person => person.personImage)
    @JoinColumn({name: 'persona_id'})
    person: Person
    
}

export default PersonImage;
