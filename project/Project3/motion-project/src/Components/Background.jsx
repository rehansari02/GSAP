import React from "react";

function Background() {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        <nav className="w-full absolute top-[5%] py-8 flex justify-center text-zinc-600 text-xl font-semibold ">
          Documents
        </nav>
        <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]   text-[13vw] text-zinc-900 text-center font-bold ">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
