import React from "react";

import kazberianz from "../assets/experience/kazberianz.png";
import cyborgs from "../assets/experience/cyborgs.png";
import stallionz from "../assets/experience/stallionz.png";
import xantrons from "../assets/experience/xantrons.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: kazberianz,
      title: "",
      style: "shadow-black-500",
    },
    {
      id: 2,
      src: cyborgs,
      title: "",
      style: "shadow-white-500",
    },
    {
      id: 3,
      src: stallionz,
      title: "",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: xantrons,
      title: "",
      style: "shadow-orange-600",
    },
    //{
    //  id: 5,
    //  src: tailwind,
    //  title: "Tailwind",
    //  style: "shadow-sky-400",
    //},
    // {
    //   id: 6,
    //   src: nextjs,
    //   title: "Next JS",
    //   style: "shadow-white",
    // },
    // {
    //   id: 7,
    //   src: graphql,
    //   title: "GraphQL",
    //   style: "shadow-pink-400",
    // },
    //{
    // id: 8,
    // src: github,
    // title: "GitHub",
    // style: "shadow-gray-400",
    //},
    //{
    // id: 9,
    // src: Bootstrap,
    //title: "Bootstrap",
    //style: "shadow-blue-600",
    //},
    //{
    // id: 10,
    // src: Python,
    //  title: "Python",
    //  style: "shadow-yellow-500",
    //},
    //{
    // id: 11,
    //src: Java,
    // title: "Java",
    // style: "shadow-orange-500",
    // },
  ];

  return (
    <section className='section mt-30' id='about'>
      <div className='container mx-auto'>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <h2 className="h2  leading-tight text-accent  ">
              Team Logos
            </h2>
            <p className="max-w-sm mb-16"><u>......................................................................</u></p>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;