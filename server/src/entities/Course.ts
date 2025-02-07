import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column("text")
    description!: string;

    @Column()
    image_url!: string;

    @Column()
    difficulty_level!: string;

    @CreateDateColumn()
    created_at!: Date;
}
