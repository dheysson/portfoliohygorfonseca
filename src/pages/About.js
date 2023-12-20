import React, {useContext, useEffect} from 'react';

import Photographer from '../img/about/photographer.webp';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion'

import { transition1 } from '../transitions';

import { CursorContext } from '../context/CursorContext'

const About = () => {

  useEffect(() => {
    var sm = window.matchMedia('(max-width: 640px)')
    var md = window.matchMedia('(max-width: 768px)')
    var lg = window.matchMedia('(max-width: 1024px)')
    var xl = window.matchMedia('(max-width: 1192px)')

    if(sm.matches || md.matches || lg.matches) {
      document.querySelector('header').style.backgroundColor = '#0f0c0c';
    }
  })

  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext)
  return (
      <motion.section 
      initial={{opacity: 0, y:'-50%'}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: '-50%'}}
      transition={transition1}
      className='section'
      >
        <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaverHandler}
        className='container mx-auto h-full relative'>
          {/* text and image wrapper */}
          <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 
          text-center lg:text-left lg:pt-16 xl:pt-36'>
            {/* image */}
            <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none'>
              <img src={Photographer} alt='' />
            </div>
            {/* text */}
            <motion.div 
            initial={{opacity: 0, y: '-80%'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '-80%'}}
            transition={transition1}
            className='flex-1 pt-20 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center
            items-center lg:items-center mx-8'>
              <h1 className='h1_v1'>Sobre mim</h1>
              <br />
              <p className='mb-12 max-w-sm text-center'>
                  Comecei <b>minha carreira em fotografia </b>amadora em 2020. No final de 2022, vendo a necessidade de um equipamento de qualidade para me profissionalizar em
                  fotografia, comecei a investir.<b> Fotografar é o que amo e quero viver</b>.
                <br/>
                <br/>
                Me impressiono com a <b>arte da fotografia</b> e o benefício que nos traz, como a autoestima!
                
              </p>
              <Link to={'/portfolio'} className='btn'>Veja meu trabalho</Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
};

export default About;
