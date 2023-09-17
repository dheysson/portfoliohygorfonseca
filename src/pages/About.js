import React, {useContext} from 'react';

import Photographer from '../img/about/photographer.webp';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion'

import { transition1 } from '../transitions';

import { CursorContext } from '../context/CursorContext'

const About = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext)
  return (
      <motion.section 
      initial={{opacity: 0, y:'-50%'}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: '-50%'}}
      transition={transition1}
      className='section h-full'
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
              <img src={Photographer} alt=''/>
            </div>
            {/* text */}
            <motion.div 
            initial={{opacity: 0, y: '-80%'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '-80%'}}
            transition={transition1}
            className='flex-1 pt-20 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center
            items-center lg:items-start'
             >
              <h1 className='h1_v1'>Sobre mim</h1>
              <p className='mb-12 max-w-sm'>
                  Comecei <b>minha carreira em fotografia </b>amadora colecionando momentos apenas com o 
                  aparelho celular desde 2020 e depois no final do ano de 2022 e começo de 2023
                  vendo a necessidade de um equipamento de qualidade para me profissionalizar em
                  fotografia, comecei a investir.<b> Fotografar é o que amo e quero viver</b>.
                <br/>
                <br/>
                Me impressiono com a arte da fotografia e o benefício que nos traz, como a autoestima!
                
              </p>
              <Link to={'/portfolio'} className='btn'>Clique aqui e veja meu trabalho</Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
};

export default About;
