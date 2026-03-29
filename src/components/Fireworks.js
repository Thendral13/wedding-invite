import React, { useEffect, useState } from "react";

function Fireworks() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const today = new Date();
    const wedding = new Date("2030-11-25");

    if (
      today.getDate() === wedding.getDate() &&
      today.getMonth() === wedding.getMonth() &&
      today.getFullYear() === wedding.getFullYear()
    ) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return <div className="fireworks"></div>;
}

export default Fireworks;