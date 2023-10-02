import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.png";
import audioBg from "./audio.mpeg";
import play from "./audio-on.png";
import pause from "./audio-off.png";

function App() {
  const btns = [
    "Events",
    "Documents",
    "Photos",
    "Audios",
    "Videos",
    "Contact Us",
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("myAudio");
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  return (
    <div className="container">
      <div className="content">
        <img src={logo} className="logo" alt="logo" />
        <h2>WORLD UNITED MISSION UNIVERSAL</h2>
        <div className="btns">
          {btns.map((btn, idx) => (
            <button key={idx}>{btn}</button>
          ))}

          <div>
            <audio id="myAudio" autoPlay loop src={audioBg}></audio>

            {isPlaying === false ? (
              <img
                src={pause}
                alt="play"
                onClick={() => setIsPlaying(true)}
                className="play-btn"
              />
            ) : (
              <img
                src={play}
                alt="play"
                onClick={() => setIsPlaying(false)}
                className="play-btn"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
