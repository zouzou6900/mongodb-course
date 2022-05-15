import mongoose from "mongoose";
import { ArticleModel } from "./article";
import { CommentModel } from "./comment";

async function init() {
  	// mongo connection string
    try {
	    const conn = await mongoose.connect('mongodb://root:test123*@localhost:27017/blog?authSource=admin');
        console.log("Connected to", conn.connection.db.databaseName);
    }catch(e) {
        console.error("Failed to connect to server");
    }

    // const article = new ArticleModel(
    //     {
    //         author: "Amaury",
    //         title: "How to kill your  students",
    //         body: "BABY SHARK TUDUDUDDUDU"
    //     }
    // );
    // await article.save();

    // const comment1 = new CommentModel({
    //     content: "hello",
    //     article
    // });
    // const comment2 = new CommentModel({
    //     content: "Hey !",
    //     article
    // });

    // await comment1.save();
    // await comment2.save();

    // find all blogs
    const blogs = await CommentModel.find({
        
    });

    console.log(blogs);
}

init();