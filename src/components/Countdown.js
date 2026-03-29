import React, { useEffect, useState } from "react";

function Countdown() {
  const weddingDate = new Date("2030-11-25");

  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">
      <div className="card fade-in">
        <h2>⏳ Countdown to Our Big Day</h2>
        <h1>
          {time.days}d : {time.hours}h : {time.minutes}m
        </h1>
      </div>
    </div>
  );
}

export default Countdown;