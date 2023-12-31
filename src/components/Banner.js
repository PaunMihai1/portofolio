import React from 'react';

import Image from "../assets/avatar.svg";

import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from 'react-scroll';
import { sendEmail } from '../functions';

const Banner = () => {
  return (
  <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
        <div className="flex-1 text-center font-secondary lg:text-left">
          <motion.h1 variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.7}} className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">Paun <span>MIHAI</span></motion.h1>
          <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.7}} className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">I am a</span>
            <TypeAnimation
              sequence={[
                "Front-end dev",
                2000,
                "Back-end dev",
                2000,
                "Fullstack dev",
                2000
              ]}
              speed={50}
              className="text-accent lg:text-[50px]"
              wrapper="span"
              repeat={Infinity}
              />
          </motion.div>
          <motion.p variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">I am a passionate and creative web designer, dedicated to crafting visually stunning and user-friendly websites. With a keen eye for detail and a deep understanding of the latest design trends, I specialize in transforming ideas into captivating digital experiences.</motion.p>
          <motion.div variants={fadeIn("up", 0.6)} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.7}} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
            <button onClick={sendEmail} className="btn btn-lg">Contact me</button>
            <Link
              to="work"
              smooth={true}
              spy={true}
              className="text-gradient btn-link"
            >My Portofolio</Link>
          </motion.div>
          <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
            <a href="https://github.com/PaunMihai1" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </motion.div>
        </div>
        <motion.div variants={fadeIn("down", 0.5)} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.7}} className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto">
          <img src={Image} alt="Image" />
        </motion.div>
        </div>
          <div>
      </div>
    </div>
  </div>);
};

export default Banner;
