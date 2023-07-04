import React from 'react';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
  <section className="section" id="work">
    <div className="container mx-auto m-20 pt-20 sm:m-unset sm:p-unset">
      <div className="grid grid-cols-1 gap-4 place-content-between sm:grid-cols-2">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.3}}
          className="flex flex-col justify-between gap-x-10">
          {/* { text } */}
          <div>
            <h2 className="h2 leading-tight text-accent">
              My Latest <br />
              Work.
            </h2>
            <p className="max-w-sm mb-16">
              Here are some of my latest projects. I'm constantly working on new and exciting things.
            </p>
          </div>
          {/* { image } */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* { overlay } */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>
            {/* { img } */}
            <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt="Image 1" />
            {/* { Pretitle } */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-10">
              <span className="text-gradient">UI / UX Design</span>
              </div>
            {/* { Title } */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-10">
              <span className="text-3xl text-white">Teachers Guild</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-10">
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* { overlay } */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>
            {/* { img } */}
            <img className="group-hover:scale-125 transition-all duration-500" src={Img2} alt="Image 1" />
            {/* { Pretitle } */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-10">
              <span className="text-gradient">UI / UX Design</span>
              </div>
            {/* { Title } */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-10">
              <span className="text-3xl text-white">Light</span>
            </div>
          </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* { overlay } */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>
            {/* { img } */}
            <img className="group-hover:scale-125 transition-all duration-500" src={Img3} alt="Image 1" />
            {/* { Pretitle } */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-10">
              <span className="text-gradient">UI / UX Design</span>
              </div>
            {/* { Title } */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-10">
              <span className="text-3xl text-white">DKO</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;
