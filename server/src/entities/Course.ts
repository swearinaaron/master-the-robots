import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar' })
    title!: string;

    @Column({ type: 'text' })
    description!: string;

    @Column({ name: 'image_url', type: 'varchar', nullable: true })
    image_url!: string | null;

    @Column({ name: 'difficulty_level', type: 'varchar' })
    difficulty_level!: string;

    @Column({ type: 'varchar' })
    price!: string;

    @Column({ type: 'float', nullable: true, default: 0 })
    rating!: number;

    @Column({ name: 'students_count', type: 'integer', default: 0 })
    students_count!: number;

    @Column({ name: 'udemy_url', type: 'varchar' })
    udemy_url!: string;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at!: Date;
} 