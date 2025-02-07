import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column("text")
    description!: string;

    @Column("text", { nullable: true })
    image_url!: string;

    @Column()
    difficulty_level!: string;
} 