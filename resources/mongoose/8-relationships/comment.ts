import { model, ObjectId, Schema, Types } from "mongoose";

interface IComment {
  content: string;
  article?: ObjectId,
}

const blogSchema = new Schema<IComment>({
  content: {
    required: true,
    type: String
  },
  article: {
    type: Types.ObjectId,
    ref: 'article'
  }
});

export const CommentModel = model('comment',blogSchema);
