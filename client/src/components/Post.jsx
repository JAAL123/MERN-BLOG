/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {format} from "@formkit/tempo";
export function Post({
  post: {
    summary,
    title,
    createdAt,
    author: { userName },
    image,
    _id,
  },
}) {
   const date = new Date(createdAt);
  return (
    <>
      <div className="post">
        <div className="image">
          <Link to={`post/${_id}`}>
            <img src={`http://localhost:4000/uploads/${image}`} alt="" />
          </Link>
        </div>
        <div className="texts">
          <Link to={`post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="author">{userName}</a>
            <time>{format(date,"DD-MM-YYYY")}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </>
  );
}
