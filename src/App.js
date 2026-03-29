import React, { useState, useRef } from "react";
import CinematicIntro from "./components/CinematicIntro";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import LoveStory from "./components/LoveStory";
import Gallery from "./components/Gallery";
import Details from "./components/Details";
import Particles from "./components/Particles";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);
  const audioRef = useRef(null);

  return (
    <div>
      
      {/* 💫 Floating Lights Background */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="light"
          style={{
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 10 + "s"
          }}
        />
      ))}

      {/* 💫 Cursor Sparks */}
      <Particles />

      {/* 🎵 Background Music */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* 🎬 Cinematic Intro */}
      {!start && (
        <CinematicIntro
          onStart={() => setStart(true)}
          audioRef={audioRef}
        />
      )}

      {/* 💍 Main Website */}
      {start && (
        <>
          <Hero />
          <Countdown />
          <LoveStory />
          <Gallery />
          <Details />
        </>
      )}
    </div>
  );
}

export default App;