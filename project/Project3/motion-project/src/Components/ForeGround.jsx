import React, { useRef } from "react";
import Cards from "./Cards";

function ForeGround() {
  let ref = useRef(null);
  const files = [
    {
      content:
        "Modern UI design principles for better web and mobile interfaces.",
      fileSize: "4MB",
      tag: "Design Guide",
      color: "green",
    },
    {
      content:
        "Learn how to build powerful REST APIs using Node.js and Express.",
      fileSize: "3MB",
      tag: "Backend Tutorial",
      color: "blue",
    },
    {
      content:
        "Explore 10 creative GSAP animations for interactive websites today.",
      fileSize: "5MB",
      color: "yellow",
    },
    {
      content:
        "Ultimate React hooks cheat sheet to improve your frontend workflow.",
      fileSize: "2MB",
      tag: "React Tips",
      color: "purple",
    },
    {
      content:
        "Master Tailwind CSS for responsive layouts with minimal effort fast.",
      fileSize: "6MB",
      tag: "CSS Framework",
      color: "pink",
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0  w-full h-screen z-3 flex gap-[2vw] py-10 px-6 flex-wrap "
    >
      {files.map((e, idx) => {
        return <Cards key={idx} data={e} reference={ref} />;
      })}
    </div>
  );
}

export default ForeGround;
