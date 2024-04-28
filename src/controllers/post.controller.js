import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  const { title, summary, content } = req.body;
  const file = req?.file?.filename;

  try {
    if (!file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newPost = new Post({ title, summary, content, image: file });

    res.status(201).json({
      id: newPost._id,
      title: newPost.title,
      summary: newPost.summary,
      content: newPost.content,
      createdAt: newPost.createdAt,
      updatedAt: newPost.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
