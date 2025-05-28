import React from "react";
import { easeIn, motion } from "motion/react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";

const Banner = () => {
  return (
    <div className="flex items-center justify-around">
      <motion.div
        className="space-y-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: 1, ease: easeIn }}
      >
        <h1 className="text-6xl font-semibold">
          The{" "}
          <motion.span
            animate={{
              color: ["#9d1675", "#169d2c", "#16829d", "#49169d", "#9d167c"],
              transition: { duration: 4, repeat: Infinity },
            }}
          >
            Easiest Way
          </motion.span>{" "}
          <br /> to Get Your New Job
        </h1>
        <p className="max-w-[500px] text-xl">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>
        <div className="space-x-2">
          <input className="rounded-2xl border-2 px-4 py-1" type="text" />
          <button className="btn btn-primary rounded-2xl">Search</button>
        </div>
      </motion.div>
      <div>
        <motion.img
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="w-[400px] rounded-[40px] border-l-8 border-sky-800"
          src={team1}
          alt=""
        />
        <motion.img
          animate={{ x: [200, 250, 200] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="w-[400px] rounded-[40px] border-l-8 border-sky-800"
          src={team2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
