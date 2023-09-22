import React, {useContext} from 'react';

//import images
import PhotographerExt from '../img/home/photographer_ext.png';

//import Link
import { Link } from 'react-router-dom';

//import motion
import { motion } from 'framer-motion';

//import transition
import { transition1 } from '../transitions';

import { CursorContext } from '../context/CursorContext';

const Home = () => {
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
      <div className='block xl:hidden container mx-auto h-full relative'>
        {/* image */}
        <div className='absolute pt-40 h-full overflow-hidden'>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            transition={transition1}
            className=''
            >
              <motion.img
              whileHover={{ scale: [1.5,1.65] }}
              transition={transition1}

              src={PhotographerExt} alt='' className='scale-150'/>
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
            z-10 flex flex-col items-center justify-center backdrop-blur-[4px] bg-[#ffffff8f] rounded-md'
          >
            <h1 className='h1 text-[#181818]'>fotógrafo</h1>
            <p className='text-[26px] text-[#000000] font-primary mb-4'>
              Espigão D'Oeste, RO
            </p>
            <Link to={'/portfolio'} className='btn'>Surpreenda-se</Link>  
          </motion.div>
        </div>
          
      </div>

      {/* Desktop */}
      <div className='hidden lg:block container mx-auto h-full relative'>
        {/* text and img wrapper */}
        <div className='flex flex-col justify-start i h-full'>
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
            <div className='flex flex-col h-[275px] justify-between'>
              <h1 className='h1 mb-0'>fotógrafo</h1>
              <p className='text-[26px] lg:text-[36px] font-primary'>
                Espigão D'Oeste, RO
              </p>
            <Link to={'/portfolio'} className='btn w-[240px]'>Surpreenda-se</Link>  
            </div>
          </motion.div>

          {/* image */}
          <div className='flex justify-end max-h-96
           lg:max-h-max'>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            transition={transition1}
            className='lg:-right-14 xl:overflow-hidden'
            >
              <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={PhotographerExt} alt=''/>
            </motion.div>            
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
