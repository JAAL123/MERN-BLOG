import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  const { title, summary, content } = req.body;
  const file = req?.file?.filename;
  const author = req.user.id;
  try {
    if (!file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newPost = new Post({ title, summary, content, image: file, author });
    const postSaved = await newPost.save();

    return res.status(201).json({
      id: postSaved._id,
      title: postSaved.title,
      summary: postSaved.summary,
      content: postSaved.content,
      image: postSaved.image,
      author: postSaved.author,
      createdAt: postSaved.createdAt,
      updatedAt: postSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  try {
    const options = {
      page,
      limit,
      sort: { createdAt: -1 },
      populate: { path: "author", select: "userName" },
    };
    const posts = await Post.paginate({}, options);
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
    const post = await Post.findById(id).populate("author", "userName");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
