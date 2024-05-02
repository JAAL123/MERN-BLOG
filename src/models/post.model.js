import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import mongoosePagination from "mongoose-paginate-v2";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

postSchema.plugin(mongoosePagination);

export default mongoose.model("Post", postSchema);
