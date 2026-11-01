import { useState } from 'react';
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Math from "./components/Math"
import Biology from "./components/Biology"

import SoundButton from "./components/SoundButton";
import SongPlayer from "./components/Music";

const chapters = [Hero, Projects, Math, Biology];

function App() {
  const [step, setStep] = useState(0);
  const [soundOn, setSoundOn] = useState(0);

  const finished = step === chapters.length - 1;
  const ChapterNow = chapters[step];
  return (
    <main className="p-10">

      <div className="flex flex-row gap-10">
        <button className="mute" onClick={() => setSoundOn(!soundOn)}>
          {soundOn ? "sound on" : "sound off"}
        </button>

        <SongPlayer />
      </div>

      <ChapterNow />

      <div className="flex flex-row gap-5 justify-center">
        {
          step !== 0 && (
            <button onClick={() => setStep(0)}>
              home
            </button>
          )}

        {
          step !== 0 && (
            <button onClick={() => setStep(step - 1)}>
              go back
            </button>
          )
        }

        {
          !finished && (
            <SoundButton
              soundOn={soundOn}
              onClick={() => setStep(step + 1)}>
              continue!
            </SoundButton>
          )}
      </div>
    </main>
  );
}

export default App
