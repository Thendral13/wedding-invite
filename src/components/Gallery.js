import React, { useState } from "react";

function Gallery() {
  const images = ["/couple.jpg", "/couple2.jpg", "/couple3.jpg"];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="section">
      <div className="card fade-in">
        <h2>📸 Our Moments</h2>

        <img
          src={images[index]}
          alt="gallery"
          style={{
            width: "300px",
            borderRadius: "20px",
            marginBottom: "10px"
          }}
        />

        <br />

        <button className="btn" onClick={prev}>⬅</button>
        <button className="btn" onClick={next}>➡</button>
      </div>
    </div>
  );
}

export default Gallery;