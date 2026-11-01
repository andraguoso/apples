export default function InterestCard({ topic, rant, style }) {
    return (
        <article className="card flex flex-col gap-2" style={style}>
            <h2>{topic}</h2>
            <p>{rant}</p>
        </article>
    );
}