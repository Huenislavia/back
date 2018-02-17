import {Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, ManyToMany, JoinTable} from "typeorm";
import { Post } from "./Post";
import { Comment } from "./Comment";

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

    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[];

    @ManyToMany(type => Post, post => post.userLikes)
    @JoinTable()
    likedPosts: Post[];

}
