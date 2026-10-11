export default function ProjectCard({ name, blurb, link, style }) {
    return (
        <article className="card" style={style}>
            <h2>{name}</h2>
            <p>{blurb}</p>
            <a href={link}>visit!</a>
        </article>
    );
}