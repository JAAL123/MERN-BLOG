/* eslint-disable react/prop-types */
export function Post({ post: { summary, title, createdAt } }) {
  const date = new Date(createdAt);
  const formattedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="post">
        <div className="image">
          <img src="img/blog1.jpeg" alt="" />
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">Nombre autor</a>
            <time>{formattedDate}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </>
  );
}
