import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("profiles")
export class Profile {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: string;

    @Column()
    email!: string;

    @Column()
    name!: string;

    @Column()
    avatar_url!: string;

    @CreateDateColumn()
    created_at!: Date;
}
