export default function SayHi() {
    return (
        <section className="sayhi">
            <h1>contact me!</h1>
            <p>
                You can find me here and there:
                <div className="flex flex-row gap-5">
                    <a
                        className="hover:scale-110"
                        href="https://www.linkedin.com/in/andreaguilarorbegoso"
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