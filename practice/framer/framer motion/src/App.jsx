import React from "react";
import { motion } from "motion/react";

function App() {
  return (
    <>
      {/* <motion.div
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
        }}
        transition={{
          duration: 16,
          delay: 1,
          ease: "anticipate",
        }}
        className="box"
      ></motion.div> */}
      <motion.div
        drag
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{
          left: 20,
        }}
        dragDirectionLock="true"
        className="circle"
      ></motion.div>
    </>
  );
}

export default App;
