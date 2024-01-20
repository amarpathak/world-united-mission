import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.png";
import audioBg from "./audio.mpeg";
import play from "./audio-on.png";
import pause from "./audio-off.png";
import contactUs from "./asseset/contactUs.pdf";
import jeevanDarshan1 from "./asseset/jeevandarshanPart-1.zip";
import worldRevolution from "./asseset/worldRevolution.pdf";
import wumLetter from "./asseset/wumLetter.pdf";



function App() {
  const btns = [
    {
      id: 1,
      name: "Events",
      link: null,
    },
    {
      id: 2,
      name: "Documents",
     
    },
    {
      id: 3,
      name: "Photos",
      link: null,
    },
    {
      id: 4,
      name: "Audios",
      link: null,
    },
    {
      id: 5,
      name: "Videos",
      link: "https://www.youtube.com/@WorldUnitedMissionUniversal",
    },
    {
      id: 6,
      name: "Contact Us",
      link: contactUs,
    },
  ];

  const documentsLinks = [
    { id:1, name:"jeevanDarshan part-1", link: jeevanDarshan1 },
    { id:2, name:"jeevanDarshan part-2", link: null },
    { id:3, name:"World Revolution", link: worldRevolution },
    { id:4, name:"Wum Letter", link: wumLetter },
  ]
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [downloadModalIsOpen, setdownloadModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setdownloadModalIsOpen(false)
    setModalIsOpen(false);
  };

  const handleDownload = (link, name) => {
    if (link === null) {
      setdownloadModalIsOpen(false)
      openModal()
    } else if (name === "Documents") {
      setdownloadModalIsOpen(true)
    } else {
      closeModal()
    }
  };

  useEffect(() => {
    const audio = document.getElementById("myAudio");
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  return (
    <div className="container ">
      <div className="content">
        <img src={logo} className="logo" alt="logo" />
        <h2>WORLD UNITED MISSION UNIVERSAL</h2>
        <div className="btns">
          {btns.map((btn) => (
            <a
              download=""
              href={btn.link}
              key={btn.id}
              target="_blank"
              onClick={() => handleDownload(btn.link, btn.name)}
            >
              {btn.name}
            </a>
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
      {
        modalIsOpen && <div className="modal_Conatiner">
          <div className="modal popup">
            <h2>Currently Not Available</h2>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>

      }

      {downloadModalIsOpen &&
        <div className="modal_Conatiner">
          <div className="modal downloadPopup">
            {documentsLinks.map((link) => (
              <a
                download=""
                href={link.link}
                key={link.id}
                target="_blank"
                onClick={() => handleDownload(link.link, link.name)}
                className="downloadBtn"
              >
                {link.name}
              </a>
            ))}
             <button onClick={closeModal}>Close</button>
          </div>
        </div>
      }


    </div>
  );
}

export default App;
