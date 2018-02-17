import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from "./User";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    caption: string;

    @Column()
    location: string;

    @ManyToOne(type => User, user => user.posts)
    user: User;
}
