import duck from "../assets/main_duck.jpeg"
import fish from "../assets/main_fish.jpeg"
import bee from "../assets/main_lpsBee.jpeg"
import dog from "../assets/main_dog.jpeg"
import bunny from "../assets/main_bunny.jpeg"

export default function Hero() {
    return (
        <section className="flex flex-col m-0 gap-5">
            <div className="flex flex-col justify-center text-center align-items">
                <span className="text-[5.5vh] text-[color:var(--main)] font-[family-name:var(--heading-font)]">
                    hello world
                </span>
                <p>
                    I like spending long hours in front of my computer! I need to stretch more frequently.
                </p>
            </div>
            <div className="flex justify-center flex-row gap-5">
                <img className="w-auto h-48" src={duck}></img>
                <img className="w-auto h-48" src={bee}></img>
                <img className="w-auto h-48" src={dog}></img>
                <img className="w-auto h-48" src={fish}></img>
                <img className="w-auto h-48" src={bunny}></img>
            </div>
            <div className="flex flex-row gap-9 text-center">
                <div className="w-1/2">
                    <h1>about me</h1>
                    <p>
                        I'm a high school senior that enjoys web
                        development, competitive programming and quantum computing a
                        lot. I'll start studying Computer Engineering in 2027!
                    </p>
                </div>
                <div className="w-1/2">
                    <h1>contact me!</h1>
                    <p>
                        You can find me here and there:
                        <div className="flex flex-row align-items justify-center gap-5">
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
                </div>
            </div>
        </section>
    );
}