import { useEffect, useState } from "react";
import { usePost } from "../context/PostContext";
import { useParams } from "react-router-dom";
import { format } from "@formkit/tempo";
export function Article() {
  const { getPost } = usePost();
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPost(id).then((res) => setArticle(res));
  }, []);

  console.log(article);
  if (!article) return <div>Post no existe...</div>;

  const date = new Date(article?.createdAt);
  return (
    <>
      <div className="post-page">
        <h1>{article.title}</h1>
        <div className="info">
          <div className="author">@{article.author?.userName}, </div>
          <time>{ article.createdAt && format(date, "DD-MM-YYYY")}</time>
        </div>
        <div className="post-page-image">
          <img src={`http://localhost:4000/uploads/${article.image}`} alt="" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.content }} className="content" />
      </div>
    </>
  );
}
