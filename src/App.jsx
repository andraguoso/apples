import { useState } from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import SayHi from "./components/SayHi";
import Interests from "./components/Interests"
import SoundButton from "./components/SoundButton";

const chapters = [Hero, About, Projects, Interests, SayHi]

function App() {
  const [step, setStep] = useState(0);
  const [soundOn, setSoundOn] = useState(false);

  const finished = step === chapters.length - 1;
  const ChapterNow = chapters[step];
  return (
    <main className="p-10">
      <button className="mute" onClick={() => setSoundOn(!soundOn)}>
        {soundOn ? "sound on" : "sound off"}
      </button>

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
