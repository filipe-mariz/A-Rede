import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Image from './01_professionalImage';

@Entity('Professional')
class Professional {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar', { length: 50})
    name: string

    @Column('varchar', { length: 10})
    born: string

    @Column('varchar', { length: 20})
    activity: string

    @Column('varchar', { length: 60})
    email: string

    @Column('varchar', { length: 17})
    whatsapp: string

    @Column('varchar', { length: 20})
    country: string

    @Column('varchar', { length: 20})
    state: string

    @Column('varchar', { length: 20})
    city: string

    @Column('varchar', { length: 70})
    street: string

    @Column('varchar', { length: 10})
    complement: string

    @Column('varchar', { length: 10})
    number: string

    @Column('varchar', { length: 1000})
    bio: string

    @Column('varchar', { length: 20})
    days: string

    @Column('varchar', { length: 20})
    hours: string

    @Column('varchar', { length: 20})
    userName: string

    @Column('varchar', { length: 50})
    passwordHash: string

    @OneToMany(() => Image, image => image.professional, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'professional_id'})
    image: Image[];

} 

export default Professional;
