import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { Post } from './entity/Post';

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.name = "Andrew";
    user.email = "andrewasdqwasdqwee@hue.com";
    user.userName = "darknerdasdqwes";
    user.password = "123";
    await connection.manager.save(user);

    const post = new Post();
    post.image = "https://picsum.photos/500/500";
    post.caption = "bla";
    post.location = "";
    post.user = user;
    await connection.manager.save(post);
    console.log("Saved a new user with id: " + user.uuid);
    
    console.log("Loading users from the database...");
    const users = await connection.manager.find(User, ({ relations: ["posts"] }));
    console.log("Loaded users: ", users);
     
    console.log("Here you can setup and run express/koa/any other framework.");
    
}).catch(error => console.log(error));
