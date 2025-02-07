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

    @Column({ default: "Free" })
    price!: string;

    @Column({ type: "numeric", precision: 2, scale: 1, default: 5 })
    rating!: number;

    @Column({ default: 0 })
    students_count!: number;

    @Column({ default: "#" })
    udemy_url!: string;

    @CreateDateColumn()
    created_at!: Date;
}
