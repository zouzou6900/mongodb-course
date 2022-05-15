import { model, Schema } from "mongoose";

interface IArticle {
  title:  string, 
  author: string,
  body:   string,
  date: Date,
}

const articleSchema = new Schema<IArticle>({
  title: {
    unique: true,
    type: String,
    required: true
  },
  author: {
    type: String,
    // required field
    required: true
  },
  body: {
    // default value
    default: "Lorem ipsum dolor sit amet",
    type: String
  },
  date: {
    // over january 2001
    min: new Date(2000,1),
    default: () => new Date(),
    type: Date
  }
});

export const ArticleModel = model('article',articleSchema);
