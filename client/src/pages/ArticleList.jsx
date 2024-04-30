import { useEffect } from "react";
import { Post } from "../components/Post";
import { usePost } from "../context/PostContext";

export function ArticleList() {
  const { getPosts, posts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);

  if (posts.length === 0) {
    return <h1>Aun no hay posts...</h1>;
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} post={{ ...post}} />
      ))}
    </>
  );
}
