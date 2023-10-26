"use client";

import React from "react";
import { motion } from "framer-motion";
import { useParallax } from "@/components/animation/useParallax";

const HomePage = () => {
  const {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    border1X,
    border1Y,
    border2X,
    border2Y,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  } = useParallax();

  return (
    <>
      <motion.div
        className="w-[80vh] min-h-[80vh] flex flex-col items-center justify-center border border-zinc-400 shadow-inner bg-transparent"
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <motion.h1
          style={{
            x: primaryX,
            y: primaryY,
          }}
          className="text-[8rem] font-semibold block text-center absolute top-[30%] z-30 "
        >
          CyberAakash
        </motion.h1>
        <motion.div
          style={{
            x: secondaryX,
            y: secondaryY,
            // scale: 1.2
          }}
          initial={{ scale: 2 }}
          className=""
        >
          <img
            src="/mountain.webp"
            alt=""
            className="h-full w-full object-cover brightness-50 saturate-200 contrast-75"
          />
        </motion.div>
        <motion.div
          style={{
            x: border1X,
            y: border1Y,
          }}
          className="border border-white bg-transparent block h-80 w-80 absolute z-10"
        ></motion.div>
        <motion.div
          initial={{ scale: 1 }}
          // whileHover={{
          //   scale: 1.2,
          //   transition: { duration: .1 },
          // }}
          style={{
            x: border2X,
            y: border2Y,
          }}
          className="border border-white bg-transparent block h-96 w-96 absolute z-20"
        ></motion.div>
      </motion.div>
    </>
  );
};

export default HomePage;
