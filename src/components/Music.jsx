import { useState } from "react";
import { useRef } from "react";

import prada from "../assets/prada.mp3";
import sdq from "../assets/sociopathic_dance_queen.mp3"
import goDeep from "../assets/go_deep.mp3"

let songs = [
    {
        name: "Prada",
        artist: "Arca",
        album: "KICK ii",
        music: prada
    },
    {
        name: "Sociopathic Dance Queen",
        artist: "Amaarae",
        album: "Fountain Baby",
        music: sdq
    },
    {
        name: "Go Deep",
        artist: "Janet Jackson",
        album: "The Velvet Rope",
        music: goDeep
    }
]

export default function SongPlayer() {
    const [i, setI] = useState(0);
    const [plays, setPlays] = useState(false);
    const audio = useRef(null);

    function PlaySong(song) {

        if (audio.current) audio.current.pause();

        audio.current = new Audio(song);
        audio.current.volume = 0.3;
        audio.current.currentTime = 0;
        audio.current.play();

        setPlays(true);
    }

    function togglePlay() {
        if (!audio.current) {
            PlaySong(songs[i].music); return;
        }

        if (plays) {
            audio.current.pause(); setPlays(false);
        }
        else {
            audio.current.play(); setPlays(true);
        }
    }

    return (
        <div>
            <div className="flex flex-col w-64 bg-(--secondary) p-3">
                <span className="text-[2.3vh] text-(--light)">{songs[i].name}</span>
                <span className="text-[2vh] text-(--light)"> {songs[i].artist} · {songs[i].album}</span>
                <div className="flex flex-row gap-5 py-1">
                    <button className="text-[2vh] px-2" onClick={() => {
                        const backI = (i - 1 + songs.length) % songs.length;
                        setI(backI);
                        PlaySong(songs[backI].music);
                    }}>⏮</button>
                    <button className="text-[2vh] px-2" onClick={togglePlay}>
                        ⏯
                    </button>
                    <button className="text-[2vh] px-2" onClick={() => {
                        const nextI = (i + 1) % songs.length;
                        setI(nextI);
                        PlaySong(songs[nextI].music);
                    }}>⏭</button>
                </div>
            </div>
        </div>);
}