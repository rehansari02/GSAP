import React from "react";
import { motion } from "motion/react";
import { FaSave } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
function Cards({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        className=" relative card w-56 h-72 rounded-[40px] overflow-hidden bg-zinc-700 p-5 text-white "
      >
        <FaSave className="text-lg" />
        <p className="text-sm font-semibold mt-4">{data.content}</p>
        <footer className="w-full absolute bottom-0 left-0">
          <div className="flex justify-between mb-2 items-center py-3  px-5">
            <h5 className="text-sm">{data.fileSize}</h5>
            <span className="w-5 h-5 flex items-center justify-center bg-zinc-400 rounded-full">
              <MdDownloadForOffline className="text-xl bg-transparent" />
            </span>
          </div>
          {data.tag && (
            <div
              className={`tag w-full py-4`}
              style={{ backgroundColor: data.color }}
            >
              <p className="text-center text-sm">{data.tag}</p>
            </div>
          )}
        </footer>
      </motion.div>
    </>
  );
}

export default Cards;
