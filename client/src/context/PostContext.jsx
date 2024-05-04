/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { getPostsRequest, getPostRequest } from "../api/post";

export const PostContext = createContext();

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      const res = await getPostsRequest();
      setPosts(res.data.docs);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <PostContext.Provider value={{ loading, posts, getPosts,getPost }}>
      {children}
    </PostContext.Provider>
  );
};
