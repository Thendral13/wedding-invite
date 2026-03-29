import React from "react";

function Hero() {
  return (
    <div
      style={{
        height: "100vh",
        background: "url('/couple.jpg') center/cover no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 10px black"
      }}
    >
      <div className="fade-in">
        <h1 style={{ fontSize: "3rem" }}>💍 Wedding Invitation</h1>
        <h2>Thendral ❤️ Your Partner</h2>
        <p>We are getting married</p>
      </div>
    </div>
  );
}

export default Hero;