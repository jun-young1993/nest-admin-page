import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('code')
export class Code {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    code!: string;

    @Column()
    name!: string;

    @Column({
        default: null,
        nullable: true,
    })
    description?: string;
}