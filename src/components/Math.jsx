import InterestCard from "./InterestCard"

const interests = [
    {
        topic: "dynamical systems",
        rant: "i picked it up due to my JRA role, but i actually ended up liking it a lot! i'm reading devaney's intro and some other papers. the proofs are definitely a challenge but i think what i like about it is how much different it is from the math i study at school and whatnot, it's very theoretical and abstract.",
    },
    {
        topic: "fractal geometry",
        rant: "as of now, i'm reviewing fractal descriptors such as fractal dimension, lacunarity and connectivity. there are so many definitions of fractal dimension... i've reviewed mandelbrot's self-similarity and minkowski's box-counting. i still struggle a lot with formal math, but i think it'll be worth the effort. reading falconer's geometry of fractal sets was really hard."
    }

]

export default function Math() {
    return (
        <section className="flex flex-col gap-3">
            <div className="flex flex-col">
                < h1 > math</h1 >
                <p>
                    I've had a soft spot for math ever since I can remember, and I don't think its going away. Currently, I'm reading papers and chapters on fractal geometry, and I've been working on a repo documenting those readings.
                </p>
            </div >
            {
                interests.map((interest, i) => (
                    <InterestCard key={interest.topic}
                        {...interest}
                        style={{ "--i": i }}
                    />
                ))
            }
        </section >
    );
}