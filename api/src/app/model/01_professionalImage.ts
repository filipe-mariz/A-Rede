import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import Professional from  './01_Professional';

@Entity('professionalImage')

export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string;

    @ManyToOne(() => Professional, professional => professional.image)
    @JoinColumn({ name: 'professional_id' })
    professional: Professional
}


