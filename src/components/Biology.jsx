import InterestCard from "./InterestCard"

const interests = [
    {
        topic: "endocrinology",
        rant: "this was the topic assigned to me during my biology olympiad prep classes, and i got obsessed with it, especially with plant endocrinology! most don't believe plants have hormones too :)",
    },
    {
        topic: "human histology",
        rant: "i used to open my dad's histology books and just look at all the different images. he also likes to take pictures of interesting cases and show them to me, and sometimes asks me to recognize the tissue. i remember going down a few rabbitholes about desmosomes in epitelial tissue..."
    }

]

export default function Math() {
    return (
        <section>
            <h1>biology</h1>
            <p>
                My dad is a physician and I've taken after his love for his field.
            </p>

            {interests.map((interest, i) => (
                <InterestCard key={interest.topic}
                    {...interest}
                    style={{ "--i": i }}
                />
            ))}
        </section>
    );
}