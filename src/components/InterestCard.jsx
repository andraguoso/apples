export default function InterestCard({ topic, rant, style }) {
    return (
        <article className="card" style={style}>
            <h2>{topic}</h2>
            <p>{rant}</p>
        </article>
    );
}