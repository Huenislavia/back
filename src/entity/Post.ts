import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from "./User";

@Entity()
export class Post {

    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    image: string;

    @Column()
    caption: string;

    @Column()
    location: string;

    @ManyToOne(type => User, user => user.posts)
    user: User;
}
