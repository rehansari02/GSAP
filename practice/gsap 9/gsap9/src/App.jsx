import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "./App.css";

function App() {
  let buttonclick = () => {
    let moves = gsap.utils.random(-500, 500, 40);
    gsap.to(".box", {
      x: moves,
      y: moves,
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <main>
        <button
          onClick={() => {
            buttonclick();
          }}
        >
          Move
        </button>
        <div className="box"></div>
      </main>
    </>
  );
}

export default App;
