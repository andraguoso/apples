import ProjectCard from "./ProjectCard"

const projects = [
    { name: "herchoice", blurb: "resource page for sci olympiad girls", link: "https://herchoice-tan.vercel.app/" },
    { name: "patmol", blurb: "enterprise landing page", link: "https://patmol.vercel.app" },
    { name: "fractal descriptors", blurb: "testing fractal dimension analysis methods", link: "https://github.com/andraguoso/fractal-descriptors" }
];

export default function Projects() {
    return (
        <section>
            <h2>my projects</h2>
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </section>
    );
}