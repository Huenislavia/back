import {Entity, PrimaryGeneratedColumn, Column, Index, OneToMany} from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

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

    @Column()
    avatar: string;

    @Column()
    bio: string;

    @OneToMany(type => Post, photo => photo.user)
    posts: Post[];
}
