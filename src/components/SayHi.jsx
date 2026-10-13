export default function SayHi() {
    return (
        <section className="sayhi">
            <h1>contact</h1>
            <p>
                You can find me in all these places:
                <div className="flex flex-row gap-5">
                    <a
                        className="hover:scale-110"
                        href="https://www.linkedin.com/in/andreaguilarorbegoso/"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="hover:scale-110"
                        href="https://www.instagram.com/caprisao/"
                        target="_blank"
                    >
                        Instagram
                    </a>
                </div>
            </p>
        </section>
    );
}