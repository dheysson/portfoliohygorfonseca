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
      <div className='container mx-auto h-full relative'>
        {/* text and img wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div
            initial={{opacity: 0, y: '-50%' }}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='w-full pt-36 pb-14 lg:pt-10 lg:pb-10
            lg:w-auto z-10 lg:absolute flex flex-col items-center lg:items-start xl:h-[640px]'
          >
            <h1 className='h1'>fotógrafo</h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
              Espigão D'Oeste, RO
            </p>
            <Link to={'/portfolio'} className='btn mb-[30px]'>Surpreenda-se</Link>
          </motion.div>
          {/* image */}
          <div className='flex justify-end max-h-96
           lg:max-h-max'>
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            transition={transition1}
            className='relative lg:-right-14 xl:overflow-hidden'
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
