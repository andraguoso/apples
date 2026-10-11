import { useState } from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import SayHi from "./components/SayHi";
import SoundButton from "./components/SoundButton";

const chapters = [Hero, About, Projects, SayHi]

function App() {
  const [step, setStep] = useState(0);
  const [soundOn, setSoundOn] = useState(false);

  const finished = step === chapters.length - 1;

  return (
    <main>
      {chapters.slice(0, step + 1).map((Chapter, i) => (
        <Chapter key={i} />
      ))}

      <button className="mute" onClick={() => setSoundOn(!soundOn)}>
        {soundOn ? "sound on" : "sound off"}
      </button>

      {!finished && (
        <SoundButton soundOn={soundOn} onClick={() => setStep(step + 1)}>continue!</SoundButton>
      )}
    </main>
  );
}

export default App
