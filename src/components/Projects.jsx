import ProjectCard from "./ProjectCard"

const projects = [
    { name: "herchoice", blurb: "resource page for sci olympiad girls", link: "https://herchoice-tan.vercel.app/" },
    { name: "patmol", blurb: "enterprise landing page", link: "https://patmol.vercel.app" },
    { name: "fractal descriptors", blurb: "testing fractal dimension analysis methods", link: "https://github.com/andraguoso/fractal-descriptors" }
];

export default function Projects() {
    return (
        <section>
            <h1>my projects</h1>
            {projects.map((project, i) => (
                <ProjectCard key={project.name}
                    {...project}
                    style={{ "--i": i }}
                />
            ))}
        </section>
    );
}