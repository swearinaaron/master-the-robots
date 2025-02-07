import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("podcasts")
export class Podcast {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column("text")
    description!: string;

    @Column("text")
    url!: string;
} 