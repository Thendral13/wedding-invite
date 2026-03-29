import React, { useEffect } from "react";

function Particles() {
  useEffect(() => {
    const createSpark = (e) => {
      const spark = document.createElement("div");
      spark.className = "spark";

      spark.style.left = e.clientX + "px";
      spark.style.top = e.clientY + "px";

      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", createSpark);

    return () => {
      window.removeEventListener("mousemove", createSpark);
    };
  }, []);

  return null;
}

export default Particles;