import React, {useContext} from 'react';


// ensaio para marca
import Thumb1 from '../img/portfolio/ensaiomarca/thumb.jpg'
import Photo1 from '../img/portfolio/ensaiomarca/photo (1).jpg'
import Photo2 from '../img/portfolio/ensaiomarca/photo (2).jpg'
import Photo3 from '../img/portfolio/ensaiomarca/photo (3).jpg'

// fotos esportivas
import Thumb2 from '../img/portfolio/esportiva/thumb.jpg'
import Photo1_2 from '../img/portfolio/esportiva/photo (1).jpg'
import Photo2_2 from '../img/portfolio/esportiva/photo (2).jpg'
import Photo3_2 from '../img/portfolio/esportiva/photo (3).jpg'

// ensaio normal
import Thumb3 from '../img/portfolio/ensaio/thumb.jpg'
import Photo1_3 from '../img/portfolio/ensaio/photo (1).jpeg'
import Photo2_3 from '../img/portfolio/ensaio/photo (2).jpg'
import Photo3_3 from '../img/portfolio/ensaio/photo (3).jpg'

// ensaio corporativo
import Thumb4 from '../img/portfolio/branding/thumb.jpg'
import Photo1_4 from '../img/portfolio/branding/photo (1).jpg'
import Photo2_4 from '../img/portfolio/branding/photo (2).jpeg'
import Photo3_4 from '../img/portfolio/branding/photo (3).jpg'

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

import { CursorContext } from '../context/CursorContext'

//import icons
import { FaChevronCircleDown } from "react-icons/fa";

const Portfolio = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if(elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)
  return (
    <motion.section 
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}
    className='section'>
      <div className='container mx-auto h-full relative cursor-pointer'>
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
          className='flex flex-col lg:items-start h-[732px]'
          >
              <h1 className='h1 pb-0 mt-0 xl:mt-40'>Portfólio</h1>
              <div className='pb-5 xl:pb-20'>
                <a className='text-[20px]'>Para saber mais sobre mim, </a>
                <a className='underline' href='/about'>clique aqui!</a>
              </div>
              <Link to={'/contact'} className='btn mb-0 mx-auto lg:mx-0'>
                  Contate-me
              </Link>
          </motion.div>
          <i class='BsFillCaretDownFill'></i>
          {/* image grid*/}
          <div className='grid grid-cols-2 gap-3 m-5 relative'>
            {/* image */}
            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[220px] lg:h-[360px]
            bg-[#E4E8E5] overflow-hidden'>
              <img className='w-[540px] object-top object-cover h-[220px] lg:h-[360px] 
              hover:scale-110 transition-all duration-500 rounded' src={Thumb1} alt=''/>
            </motion.div>

            <motion.div 
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[220px] lg:h-[360px]
             bg-accent overflow-hidden'>
              <img className='w-[540px] object-cover h-[220px] lg:h-[360px] 
              hover:scale-110 transition-all duration-500 rounded' src={Thumb2} alt=''/>
            </motion.div>

            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[220px] lg:h-[360px]
             bg-accent overflow-hidden'>
              <img className='w-[540px] object-top object-cover h-[220px] lg:h-[360px] 
              hover:scale-110 transition-all duration-500 rounded' src={Thumb3} alt=''/>
            </motion.div>

            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[220px] lg:h-[360px]
             bg-accent overflow-hidden'>
              <img className='w-[540px] object-top object-cover h-[220px] lg:h-[360px] 
              hover:scale-110 transition-all duration-500 rounded' src={Thumb4} alt=''/>
            </motion.div>

            
          </div>

          {/* Desktop */}
          <motion.div
            animate={{translateY: ['88%','125%','88%']}}
            transition={{ ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
            className='absolute top-[88%] left-[50%] bg-white rounded-3xl hidden xl:flex'>
              <FaChevronCircleDown className='w-[38px] h-[38px]'/>
          </motion.div>

          {/* Mobile */}
          <motion.div
            animate={{translateY: ['82%','125%','82%']}}
            transition={{ ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
            className='absolute top-[82%] bg-white rounded-3xl xl:hidden'>
              <FaChevronCircleDown className='w-[38px] h-[38px]' />
            </motion.div>
        </div>

        <div className="container mx-auto pt-26 pb-10 ">
          {/* ENSAIO CORPORATIVO */}
          <div className='reveal pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5'>ensaio corporativo</h1>
            <div class="title_grid">
              <div class="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo2_4} />
              </div>
              <div class="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo1_4} />
              </div>
              <div class="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo3_4} />
              </div>
            </div>
          </div>
          {/* fotografia de moda */}
          <div className='reveal pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5'>fotografia de moda</h1>
            <div class="title_grid">
              <div class="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo2} />
              </div>
              <div class="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo1} />
              </div>
              <div class="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3} />
              </div>
            </div>
          </div>
          {/* esportiva */}
          <div className='reveal pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5'>fotografia esportiva</h1>
            <div class="title_grid">
              <div class="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo1_2} />
              </div>
              <div class="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo2_2} />
              </div>
              <div class="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo3_2} />
              </div>
            </div>
          </div>
          {/* ensaio */}
          <div className='reveal pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5'>ensaio fotográfico</h1>
            <div class="title_grid">
              <div class="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo1_3} />
              </div>
              <div class="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_3} />
              </div>
              <div class="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo2_3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
