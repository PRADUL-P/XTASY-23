import { motion } from 'framer-motion';
import React from 'react';

import { fadeIn } from '../variants';

import Webdes from "../assets/services.png";

import Ui from "../assets/services.png";
import { Link } from 'react-scroll';

const services = [
  {
    name: 'K S Harishankar',
    description: 'singer',
    image: Webdes
  },

  {
    name: 'Prayam Band',
    description: 'Band',
    image: Ui
  }]
const Services = () => {
  return (
    <section className='section mt-40' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col '>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }} className='flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6 '>Special Guest</h2>
            <h3 className='h3  text-[20px] mb-16'><u>.................................................................</u></h3>
            <Link to='work' >
            </Link>

          </motion.div>

          <div>
            <div>
              {services.map((services, index) => {
                const { name, description, image } = services

                return (


                  <motion.div

                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='border-b border-white/20 h-[286px] 
                  mb-[38px] flex ' key={index}>
                    <div className="flex  flex-1 ">
                      <img className=" mx-5 w-25 h-100 mb-[42px] flex justify-center items-center " src={image} alt="" />
                    </div>

                    <div className='max-w-[426px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>


                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;