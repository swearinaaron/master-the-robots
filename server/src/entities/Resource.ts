import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("resources")
export class Resource {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column("text")
    description!: string;

    @Column("text", { nullable: true })
    url!: string | null;

    @Column()
    type!: string;
} 