import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("resources")
export class Resource {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column("text")
    description!: string;

    @Column()
    type!: string;

    @Column()
    url!: string;

    @CreateDateColumn()
    created_at!: Date;
}
