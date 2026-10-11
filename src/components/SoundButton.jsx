import { useRef } from "react";
import click from "../assets/click.mp3";

export default function SoundButton({ soundOn, onClick, children }) {
    const audio = useRef(null);

    function handleClick() {
        if (soundOn) {
            audio.current ??= new Audio(click);
            audio.current.volume = 0.3;
            audio.current.currentTime = 0;
            audio.current.play();
        }
        onClick();
    }

    return <button onClick={handleClick}>{children}</button>;
}
