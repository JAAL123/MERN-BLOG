import axios from "./axios.js";

export const createPostRequest = (post) => axios.post("/create-post", post);

export const getPostsRequest = () => axios.get("/posts");

export const getPostRequest = (id) => axios.get(`/posts/${id}`);
