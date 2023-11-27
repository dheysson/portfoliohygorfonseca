import React, {useContext, useEffect} from 'react';

//import images
import PhotographerMobile from '../img/home/photographer.jpg';
import PhotographerDesktop from '../img/home/photographer_ext.png';

//import Link
import { Link } from 'react-router-dom';

//import motion
import { motion } from 'framer-motion';

//import transition
import { transition1 } from '../transitions';

import { CursorContext } from '../context/CursorContext';

import { FaArrowRight } from "react-icons/fa";

const Home = () => {

  useEffect(() => {
    var sm = window.matchMedia('(max-width: 640px)')
    var md = window.matchMedia('(max-width: 768px)')
    var lg = window.matchMedia('(max-width: 1024px)')
    // var xl = window.matchMedia('(max-width: 1192px)')

    if(sm.matches || md.matches || lg.matches)
      document.querySelector('header').style.backgroundColor = '#ffffff00';
  })

  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext)
  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition1}
    className='section xl:overflow-hidden'
    >
      {/* Mobile */}
      <div className='flex xl:hidden container mx-auto h-full relative justify-center'>
        {/* image */}
        <div className='absolute h-full overflow-hidden'>
            <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={transition1} className='flex w-full h-full'>
              <motion.img whileHover={{ scale: [1.5,1.65] }} transition={transition1}
                  src={PhotographerMobile} alt='' className='scale-150 flex object-contain'/>
            </motion.div>            
          </div>
        {/* text and img wrapper */}
        <div className='flex flex-col justify-center h-full w-full items-center'>
          {/* text */}
          <motion.div
            initial={{opacity: 0, y: '-50%' }}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='w-auto h-auto p-8
            z-10 flex flex-col items-center justify-center backdrop-blur-[2px] bg-[#ffffffa4] rounded-md mt-[15rem]'>
            <h1 className='h1 text-[#121212] '>fotógrafo</h1>
            <p className='text-[26px] text-[#000000] font-primary mb-4'>
              Espigão D'Oeste, RO
            </p>
            <Link to={'/portfolio'} className='btn'>Surpreenda-se <FaArrowRight className='ml-2' /></Link>  
          </motion.div>
        </div>
          
      </div>

      {/* Desktop */}
      <div className='hidden xl:block container mx-auto h-full relative'>
        {/* text and img wrapper */}
        <div className='flex flex-col justify-start i h-full relative'>
          {/* text */}
          <motion.div
            initial={{opacity: 0, y: '-50%' }}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='absolute h-full bottom-[20px]
            lg:w-auto z-10 flex flex-col justify-center items-center'
          >
            <div className='flex flex-col max-h-[20rem]'>
              <h1 className='h1 mb-0'>Fotógrafo</h1>
              <p className='text-[26px] lg:text-[36px] font-primary'>
                Espigão D'Oeste, RO
              </p>
            <Link to={'/portfolio'} className='btn w-[240px] mt-8'>Surpreenda-se <FaArrowRight className='ml-2' /></Link>  
            </div>
          </motion.div>

          {/* image */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} transition={transition1} className='lg:-right-14 xl:overflow-hidden'>
              <motion.img whileHover={{ scale: 1.1 }} transition={transition1} src={PhotographerDesktop} className='w-[65%]' alt=''/></motion.div>            
          </div>


        </div>
      </div>

    </motion.section>
  );
};

export default Home;
