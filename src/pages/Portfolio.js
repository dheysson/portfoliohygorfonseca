import React, {useContext} from 'react';


// ensaio corporativo
import Thumb4 from '../img/portfolio/branding/thumb.webp'
import Photo1_4 from '../img/portfolio/branding/photo (1).webp'
import Photo2_4 from '../img/portfolio/branding/photo (2).webp'
import Photo3_4 from '../img/portfolio/branding/photo (3).jpg'

// ensaio para marca
import Thumb1 from '../img/portfolio/ensaiomarca/thumb.webp'
import Photo1 from '../img/portfolio/ensaiomarca/photo (1).webp'
import Photo2 from '../img/portfolio/ensaiomarca/photo (2).webp'
import Photo3 from '../img/portfolio/ensaiomarca/photo (3).jpg'

// fotos esportivas
import Thumb2 from '../img/portfolio/esportiva/thumb.webp'
import Photo1_2 from '../img/portfolio/esportiva/photo (1).webp'
import Photo2_2 from '../img/portfolio/esportiva/photo (2).webp'
import Photo3_2 from '../img/portfolio/esportiva/photo (3).jpg'

// ensaio normal
import Thumb3 from '../img/portfolio/ensaio/thumb.webp'
import Photo1_3 from '../img/portfolio/ensaio/photo (1).webp'
import Photo2_3 from '../img/portfolio/ensaio/photo (2).webp'
import Photo3_3 from '../img/portfolio/ensaio/photo (3).jpg'


import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

import { CursorContext } from '../context/CursorContext'

// import { BsFillArrowRightSquareFill } from 'react-icons/bs'

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

  function log(ev){
    var item = (ev.target.parentNode.getAttribute('id'));
    console.log(item)
    var grids = document.querySelectorAll('.id');
    switch(item) {
      case 'p_moda':
        window.scrollTo(0, 2200)
        break;
      case 'p_esportiva':
        window.scrollTo(0, 3350)
        break;
      case 'p_ensaio':
        window.scrollTo(0, 4575)
        break;
      case 'p_corporativo':
        window.scrollTo(0, 1050)
        break;

        case 'm_moda':
          window.scrollTo(0, 2500)
          break;
        case 'm_esportiva':
          window.scrollTo(0, 3000)
          break;
        case 'm_ensaio':
          window.scrollTo(0, document.body.scrollHeight);
          break;
        case 'm_corporativo':
          window.scrollTo(0, 2000)
          break;
    }
  }

  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)
  return (
    <motion.section 
      initial={{opacity: 0, y: '100%'}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: '100%'}}
      transition={transition1}
      className='section'>
      {/* No modo Desktop */}
      <div className='hidden xl:block container mx-auto h-full relative cursor-pointer'>
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

          {/* THUMBS*/}
          <div className='grid grid-cols-2 gap-2 m-2 relative'>
            {/* image */}
            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[420px] lg:h-[360px]
            bg-accent overflow-hidden' onClick={(ev)=>{ log(ev) }}>
              <div className='relative' id='p_moda'>
              <a>
                  {/* <BsFillArrowRightSquareFill className='z-20 m-2 bottom-0 right-0 absolute w-8 h-8 bg-white rounded-md' /> */}
              </a>
                <img className='w-[540px] object-top object-cover h-[420px] lg:h-[360px] 
                hover:scale-110 transition-all duration-500 rounded' src={Thumb1} alt=''/>
              </div>
            </motion.div>

            <motion.div 
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[420px] lg:h-[360px]
             bg-accent overflow-hidden' onClick={(ev)=>{ log(ev) }}>
              <div className='relative' id='p_esportiva'>
                <a>
                  {/* <BsFillArrowRightSquareFill className='z-10 m-2 bottom-0 right-0 absolute w-8 h-8 bg-white rounded-md' /> */}
                </a>
                <img className='w-[540px] object-cover h-[420px] lg:h-[360px] 
                hover:scale-110 transition-all duration-500 rounded' src={Thumb2} alt=''/>
              </div>
            </motion.div>

            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[420px] lg:h-[360px]
             bg-accent overflow-hidden' onClick={(ev)=>{ log(ev) }}>
              <div className='relative' id='p_ensaio'>
                  <a>
                    {/* <BsFillArrowRightSquareFill className='z-10 m-2 bottom-0 right-0 absolute w-8 h-8 bg-white rounded-md' />  */}
                  </a>
                  <img className='w-[540px] object-top object-cover h-[420px] lg:h-[360px] 
                  hover:scale-110 transition-all duration-500 rounded' src={Thumb3} alt=''/>
              </div>
            </motion.div>

            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[420px] lg:h-[360px]
             bg-accent overflow-hidden' onClick={(ev)=>{ log(ev) }}>
              <div className='relative' id='p_corporativo'>
                <a>
                  {/* <BsFillArrowRightSquareFill className='z-10 m-2 bottom-0 right-0 absolute w-8 h-8 bg-white rounded-md' /> */}
                </a>
                <img className='w-[540px] object-top object-cover h-[420px] lg:h-[360px] 
                hover:scale-110 transition-all duration-500 rounded' src={Thumb4} alt=''/>
              </div>
            </motion.div> 
          </div>
        </div>
        {/* IMAGE GRIDS */}
        <div className="container mx-auto pt-30 pb-10 ">
          {/* ENSAIO CORPORATIVO */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5'>branding</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                <img className='img__zoom object-cover' src={Photo1_4} alt=''/>
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_4} />
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo2_4} />
              </div>
            </div>
          </div>
          {/* fotografia de moda */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5'>fotografia de moda</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo1} />
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3} />
              </div>
              <div className="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo2} />
              </div>
            </div>
          </div>
          {/* esportiva */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5'>fotografia esportiva</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo1_2} />
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_2} />
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo2_2} />
              </div>
            </div>
          </div>
          {/* ensaio */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5'>ensaio fotográfico</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo1_3} />
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_3} />
              </div>
              <div className="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo2_3} />
              </div>
            </div>
          </div>
        </div>
        
      
      </div>

      {/* No modo Mobile */}
      <div className='block xl:hidden container mx-auto h-full relative cursor-pointer'>
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
          className='flex flex-col lg:items-start h-[732px] pb-5'
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

          {/* THUMBS*/}
          <div className='grid grid-rows-2 gap-2 m-2 relative'>
            {/* image */}
            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[420px] lg:h-[360px]
            bg-[#E4E8E5] overflow-hidden' onClick={(ev)=>{ log(ev) }}>
              <div className='relative' id='m_moda'>
                <a>
                  {/* <BsFillArrowRightSquareFill className='z-20 m-2 bottom-0 right-0 absolute w-12 h-12 bg-white rounded-md' /> */}
                </a>
                <img className='w-[540px] object-top object-cover h-[420px] lg:h-[360px] 
                hover:scale-110 transition-all duration-500 rounded' src={Thumb1} alt=''/>
              </div>
            </motion.div>

            <motion.div 
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[420px] lg:h-[360px]
             bg-accent overflow-hidden' onClick={(ev)=>{ log(ev) }}>
              <div className='relative' id='m_esportiva'>
                <a>
                  {/* <BsFillArrowRightSquareFill className='z-10 m-2 bottom-0 right-0 absolute w-12 h-12 bg-white rounded-md' /> */}
                </a>
                <img className='w-[540px] object-cover h-[420px] lg:h-[360px] 
                hover:scale-110 transition-all duration-500 rounded' src={Thumb2} alt=''/>
              </div>
            </motion.div>

            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[420px] lg:h-[360px]
             bg-accent overflow-hidden' onClick={(ev)=>{ log(ev) }}>
              <div className='relative'>
                <div id='m_ensaio'>
                  <a>
                    {/* <BsFillArrowRightSquareFill className='z-10 m-2 bottom-0 right-0 absolute w-12 h-12 bg-white rounded-md' /> */}
                  </a>
                  <img className='w-[540px] object-top object-cover h-[420px] lg:h-[360px] 
                  hover:scale-110 transition-all duration-500 rounded' src={Thumb3} alt=''/>
                </div>
              </div>
            </motion.div>

            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[420px] lg:h-[360px]
             bg-accent overflow-hidden' onClick={(ev)=>{ log(ev) }}>
              <div className='relative' id='m_corporativo'>
                <a>
                  {/* <BsFillArrowRightSquareFill className='z-10 m-2 bottom-0 right-0 absolute w-12 h-12 bg-white rounded-md' /> */}
                </a>
                <img className='w-[540px] object-top object-cover h-[420px] lg:h-[360px] 
                hover:scale-110 transition-all duration-500 rounded' src={Thumb4} alt=''/>
              </div>
            </motion.div>

            
          </div>

          {/* IMAGE GRIDS */}
          <div className="container mx-auto pt-30 pb-10 id ">
          {/* ENSAIO CORPORATIVO */}
          <div className='reveal pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5 text-left'>branding</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                <img src={Photo2_4} alt='' className='img__zoom object-cover' />
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img src={Photo1_4} alt=''/>
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img src={Photo3_4} alt=''/>
              </div>
            </div>
          </div>
          {/* fotografia de moda */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5 text-left'>fotografia de moda</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo2} alt=''/>
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo1} alt=''/>
              </div>
              <div className="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3} alt=''/>
              </div>
            </div>
          </div>
          {/* esportiva */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5 text-left'>fotografia esportiva</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo1_2} />
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo2_2} />
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo3_2} />
              </div>
            </div>
          </div>
          {/* ensaio */}
          <div className='reveal id pt-20 pb-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-5 text-left'>ensaio fotográfico</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo1_3} />
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_3} />
              </div>
              <div className="w-full rounded overflow-hidden">
                  <img className='img__zoom' src={Photo2_3} />
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
