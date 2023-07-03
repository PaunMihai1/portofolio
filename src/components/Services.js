import React from 'react';
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Web Development",
    description: `Creating dynamic and responsive websites using HTML, CSS, and JavaScript.`,
    link: "Learn more"
  },
  {
    name: "UI / UX Design",
    description: `Crafting visually appealing and intuitive user interfaces.`,
    link: "Learn more"
  },
  {
    name: "Mobile Optimization",
    description: `Designing mobile-friendly websites and optimizing them for a smooth user experience.`,
    link: "Learn more"
  },
  {
    name: "Performance Optimization",
    description: `Performance Optimization: Enhancing website speed and performance through efficient coding and optimization techniques.`,
    link: "Learn more"
  }
]

const Services = () => {
  return (
  <section className="section" id="services">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* { text & image } */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.3}}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
          <h2 className="h2 text-accent mb-6">What I Do.</h2>
          <h3 className="h3 max-w-[455px] mb-16">I create websites that adapt flawlessly to various devices and screen sizes, ensuring a seamless experience for users whether they're browsing on desktops, tablets, or smartphones.</h3>
          </motion.div>
        {/* { services } */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.3}}
          className="flex-1">
          {/* { service list } */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const { name, description, link } = service;
              return (
                <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                    <p className="font-seconday leading-tight">{description}</p>
                  </div>
                  {/* <div className="flex flex-col flex-1 items-end">
                    <a href="" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                      <BsArrowUpRight />
                    </a> 
                    <a href="" className="text-gradient text-sm">
                      {link}
                    </a>
                  </div> */}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Services;
