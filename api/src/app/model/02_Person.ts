import { 
  Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn,
  BeforeInsert, BeforeUpdate
 } from 'typeorm';
import bcrypt from 'bcryptjs'
import PersonImage from './02_PersonImage';

@Entity('Person')

class Person {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar', { length: 50 })
    name: string

    @Column('varchar', { length: 20 })
    contact: string

    @Column('varchar', { length: 20 })
    city: string

    @Column('varchar', { length: 20 })
    district: string

    @Column('varchar', { length: 50 })
    street: string

    @Column('varchar', { length: 10 })
    complement: string

    @Column('varchar', { length: 10 })
    number: string

    @Column('varchar', { length: 1000 })
    help: string

    @Column()
    lat: number

    @Column()
    long: number

    @Column('varchar', { length: 20 })
    userName: string

    @Column('varchar', { length: 50 })
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      this.password = bcrypt.hashSync(this.password, 8)
    }

    @OneToMany(() => PersonImage, (personImage) => personImage.person, {
      cascade: ['insert', 'update'],
    })
    @JoinColumn({ name: 'persona_id' })
    personImage: PersonImage[]
}

export default Person;
