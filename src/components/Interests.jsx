import InterestCard from "./InterestCard"

const interests = [
    {
        topic: "math",
        rant: "I've had a soft spot for math ever since I can remember, and I don't think its going away. Currently, I'm reading papers and chapters on fractal geometry, and I've been working on a repo documenting those readings.",
    },
    {
        topic: "biology",
        rant: "My dad is a physician and I've taken after his love for his field."
    }

]

export default function Interests() {
    return (
        <section>
            <h1>my interests</h1>
            {interests.map((interest, i) => (
                <InterestCard key={interest.topic}
                    {...interest}
                    style={{ "--i": i }}
                />
            ))}
        </section>
    );
}