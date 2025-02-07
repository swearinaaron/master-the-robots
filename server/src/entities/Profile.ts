import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("profiles")
export class Profile {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    user_id!: string;

    @Column({ nullable: true })
    name!: string;

    @Column({ nullable: true })
    email!: string;

    @Column("text", { nullable: true })
    avatar_url!: string;
} 