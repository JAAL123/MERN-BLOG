import axios from "./axios.js";

export const createPostRequest = (post) => axios.post("/create-post", post);
