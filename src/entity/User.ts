import {Entity, PrimaryGeneratedColumn, Column, Index, OneToMany} from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column()
    name: string;

    @Column()
    @Index({ unique: true })
    email: string;

    @Column()
    @Index({ unique: true })
    userName: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    avatar: string;

    @Column({ nullable: true })
    bio: string;

    @OneToMany(type => Post, photo => photo.user)
    posts: Post[];
}
