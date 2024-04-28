import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  const { title, summary, content } = req.body;
  const file = req?.file?.filename;

  try {
    if (!file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newPost = new Post({ title, summary, content, image: file });
    const postSaved = await newPost.save();

    res.status(201).json({
      id: postSaved._id,
      title: postSaved.title,
      summary: postSaved.summary,
      content: postSaved.content,
      image: postSaved.image,
      createdAt: postSaved.createdAt,
      updatedAt: postSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
