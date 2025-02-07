import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("podcasts")
export class Podcast {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column("text")
    description!: string;

    @Column()
    audio_url!: string;

    @Column()
    duration!: number;

    @CreateDateColumn()
    published_at!: Date;
}
