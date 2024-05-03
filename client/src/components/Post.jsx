/* eslint-disable react/prop-types */
export function Post({ post: { summary, title, createdAt, author:{userName}, image } }) {
  const date = new Date(createdAt);
  const formattedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}:${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="post">
        <div className="image">
          <img src={`http://localhost:4000/uploads/${image}`} alt="" />
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">{userName}</a>
            <time>{formattedDate}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </>
  );
}
