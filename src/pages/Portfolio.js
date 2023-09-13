import React, {useContext} from 'react';

import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

// ensaio para marca
import Thumb1 from '../img/portfolio/ensaiomarca/thumb.jpg'
import Photo1 from '../img/portfolio/ensaiomarca/photo (1).jpg'
import Photo2 from '../img/portfolio/ensaiomarca/photo (2).jpg'
import Photo3 from '../img/portfolio/ensaiomarca/photo (3).jpg'

// fotos esportivas
import Thumb2 from '../img/portfolio/esportiva/thumb.jpg'

// ensaio normal
import Thumb3 from '../img/portfolio/ensaio/thumb.jpg'

// marketing
import Thumb4 from '../img/portfolio/marketing/thumb.jpg'

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

import { CursorContext } from '../context/CursorContext'

const Portfolio = () => {
  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)
  return (
    <motion.section 
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}
    className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center 
        justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className='flex flex-col lg:items-start'
          >
            <h1 className='h1 pb-10'>Portfólio</h1>
              <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
                Contrate-me
              </Link>
          </motion.div>    
          {/* image grid*/}
          <div className='grid grid-cols-2 lg:gap-2'>
            {/* image */}
            <motion.div
            // whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[220px] lg:h-[360px]
            bg-[#E4E8E5] overflow-hidden'>
              <img className='w-[540px] object-top object-cover h-[220px] lg:h-[360px] 
              hover:scale-110 translate-all duration-500' src={Thumb1} alt=''/>
            </motion.div>

            <motion.div 
            // whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[220px] lg:h-[360px]
             bg-accent overflow-hidden'>
              <img className='w-[540px] object-cover h-[220px] lg:h-[360px] 
              hover:scale-110 translate-all duration-500' src={Thumb2} alt=''/>
            </motion.div>

            <motion.div
            // whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[220px] lg:h-[360px]
             bg-accent overflow-hidden'>
              <img className='w-[540px] object-top object-cover h-[220px] lg:h-[360px] 
              hover:scale-110 translate-all duration-500' src={Thumb3} alt=''/>
            </motion.div>

            <motion.div
            // whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[220px] lg:h-[360px]
             bg-accent overflow-hidden'>
              <img className='w-[540px] object-top object-cover h-[220px] lg:h-[360px] 
              hover:scale-110 translate-all duration-500' src={Thumb4} alt=''/>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto pt-10 xl:pt-20">
          <h1 className='h1_v1 text-[48px] xl:text-7xl'>fotografia de moda</h1>
          <div class="grid grid-cols-3 gap-3 pt-20 space-y-0 bg-white 
          lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div class="w-full rounded">
                <img src={Photo2} />
            </div>
            <div class="w-full col-span-2 row-span-2 rounded">
                <img src={Photo1} />
            </div>
            <div class="w-full rounded">
                <img src={Photo3} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
