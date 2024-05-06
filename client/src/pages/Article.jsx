import { useEffect, useState } from "react";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { format } from "@formkit/tempo";
import { Link } from "react-router-dom";
export function Article() {
  const { getPost } = usePost();
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    getPost(id).then((res) => setArticle(res));
  }, []);

  if (!article) return <div>Post no existe...</div>;

  const date = new Date(article?.createdAt);
  return (
    <>
      <div className="post-page">
        <h1>{article.title}</h1>
        <div className="info">
          <div className="author">@{article.author?.userName}, </div>
          <time>{article.createdAt && format(date, "DD-MM-YYYY")}</time>
        </div>
        {user?.userName === article?.author?.userName && (
          <div className="edit-row">
            <Link className="edit-btn" to={`/edit-post/${article._id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Editar
            </Link>
          </div>
        )}
        <div className="post-page-image">
          <img src={`http://localhost:4000/uploads/${article.image}`} alt="" />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="content"
        />
      </div>
    </>
  );
}
