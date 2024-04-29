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

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts.length === 0)
      return res.status(404).json({ message: "Posts not found" });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
