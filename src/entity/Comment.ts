import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne} from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @ManyToOne(type => User, user => user.comments)
    user: User;

    @Column()
    content: string;

    @ManyToOne(type => Post, post => post.comments)
    post: Post;
}
