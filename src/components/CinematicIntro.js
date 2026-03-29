import React, { useState } from "react";

function CinematicIntro({ onStart, audioRef }) {
  const [entered, setEntered] = useState(false);

  const quotes = [
    "Thendral ❤️ Madhesh — A love written in destiny ✨",
    "Two hearts, one forever 💍",
    "Together is our favorite place to be ❤️"
  ];

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  const handleEnter = () => {
    setEntered(true);

    // 🎵 Play music
    if (audioRef && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    // Move to site after animation
    setTimeout(() => {
      onStart();
    }, 4000);
  };

  if (entered) {
    return (
      <div className="cinematic">
        {/* 🎥 Video Background */}
        <video autoPlay muted className="video-bg">
          <source src="/intro.mp4" type="video/mp4" />
        </video>

        {/* ✨ Overlay Content */}
        <div className="overlay">
          <h1 className="big-names">Thendral ❤️ Madhesh</h1>
          <p className="quote">{randomQuote}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cinematic" onClick={handleEnter}>
      <h1 className="enter-text">💍 Thendral ❤️ Madhesh</h1>
      <p>Tap to Enter</p>
    </div>
  );
}

export default CinematicIntro;