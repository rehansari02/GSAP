import React from "react";
import Background from "./Components/Background";
import ForeGround from "./Components/ForeGround";

function App() {
  return (
    <div className="h-screen w-full bg-zinc-800 relative ">
      <Background />
      <ForeGround />
    </div>
  );
}

export default App;
