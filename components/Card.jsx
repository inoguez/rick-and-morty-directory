function Card({ children }) {
  return (
    <article
      id="card"
      className="bg-secondary rounded-2xl overflow-hidden max-h-40"
    >
      {children}
    </article>
  );
}
export default Card;
