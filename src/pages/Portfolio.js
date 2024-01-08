import React, {useContext, useEffect} from 'react';
import { FaArrowRight } from "react-icons/fa";


// ensaio corporativo
import Thumb4 from '../img/portfolio/branding/thumb.webp'
import Photo1_4 from '../img/portfolio/branding/photo (1).webp'
import Photo2_4 from '../img/portfolio/branding/photo (2).webp'
import Photo3_4 from '../img/portfolio/branding/photo (3).webp'

// ensaio para marca
import Thumb1 from '../img/portfolio/ensaiomarca/thumb.webp'
import Photo1 from '../img/portfolio/ensaiomarca/photo (1).webp'
import Photo2 from '../img/portfolio/ensaiomarca/photo (2).webp'
import Photo3 from '../img/portfolio/ensaiomarca/photo (3).webp'

// fotos esportivas
import Thumb2 from '../img/portfolio/esportiva/thumb.webp'
import Photo1_2 from '../img/portfolio/esportiva/photo (1).webp'
import Photo2_2 from '../img/portfolio/esportiva/photo (2).webp'
import Photo3_2 from '../img/portfolio/esportiva/photo (3).webp'

// ensaio
import Thumb3 from '../img/portfolio/ensaio/thumb.webp'
import Photo1_3 from '../img/portfolio/ensaio/photo (1).webp'
import Photo2_3 from '../img/portfolio/ensaio/photo (2).webp'
import Photo3_3 from '../img/portfolio/ensaio/photo (3).webp'

//pre wedding
import Photo1_5 from '../img/portfolio/outdoor/photo (1).webp'
import Photo2_5 from '../img/portfolio/outdoor/photo (2).webp'
import Photo3_5 from '../img/portfolio/outdoor/photo (3).webp'

//gastronomico
import Photo1_6 from '../img/portfolio/gastronomico/photo (1).webp'
import Photo2_6 from '../img/portfolio/gastronomico/photo (2).webp'
import Photo3_6 from '../img/portfolio/gastronomico/photo (3).webp'

//gestante
import Photo1_7 from '../img/portfolio/gestante/photo (1).webp'
import Photo2_7 from '../img/portfolio/gestante/photo (2).webp'
import Photo3_7 from '../img/portfolio/gestante/photo (3).webp'

//familia
import Photo1_8 from '../img/portfolio/familia/photo (1).webp'
import Photo2_8 from '../img/portfolio/familia/photo (2).webp'
import Photo3_8 from '../img/portfolio/familia/photo (3).webp'

// miscelanea
import m_photo_1 from '../img/portfolio/miscelanea/m_photo_1.webp';
import m_photo_2 from '../img/portfolio/miscelanea/m_photo_2.webp';
import m_photo_3 from '../img/portfolio/miscelanea/m_photo_3.webp';
import m_photo_4 from '../img/portfolio/miscelanea/m_photo_4.webp';
import m_photo_5 from '../img/portfolio/miscelanea/m_photo_5.webp';
import m_photo_6 from '../img/portfolio/miscelanea/m_photo_6.webp';
import m_photo_7 from '../img/portfolio/miscelanea/m_photo_7.webp';
import m_photo_8 from '../img/portfolio/miscelanea/m_photo_8.webp';
import m_photo_9 from '../img/portfolio/miscelanea/m_photo_9.webp';
import m_photo_10 from '../img/portfolio/miscelanea/m_photo_10.webp';
import m_photo_11 from '../img/portfolio/miscelanea/m_photo_11.webp';
import m_photo_12 from '../img/portfolio/miscelanea/m_photo_12.webp';
import m_photo_13 from '../img/portfolio/miscelanea/m_photo_13.webp';
import m_photo_14 from '../img/portfolio/miscelanea/m_photo_14.webp';
import m_photo_15  from '../img/portfolio/miscelanea/m_photo_15.webp';
import m_photo_16  from '../img/portfolio/miscelanea/m_photo_16.webp';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

import { CursorContext } from '../context/CursorContext'

import { goTop } from '../scripts/goTop'

// import { BsFillArrowRightSquareFill } from 'react-icons/bs'

const Portfolio = () => {

  useEffect(() => {
    var sm = window.matchMedia('(max-width: 640px)')
    var md = window.matchMedia('(max-width: 768px)')
    var lg = window.matchMedia('(max-width: 1024px)')
    var xl = window.matchMedia('(max-width: 1192px)')

    if(sm.matches || md.matches || lg.matches)
      document.querySelector('header').style.backgroundColor = '#0f0c0c';
      document.body.style.backgroundColor = '#ffffff';
  })

  // animação vertical dos elementos ao descer página
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

  // Selecionar e ir até a categoria de fotografia
  function log(ev){
    var item = parseInt(ev.target.parentNode.getAttribute('id'));
    console.log(item)
    document.querySelectorAll('.id')[item].scrollIntoView({behavior: 'smooth'});
  }

  // function changeNav() {
  //   let bodyHeight = document.body.getBoundingClientRect().bottom;
  //   let nav = document.querySelector('nav');
  //   let logo = document.querySelector('.logo');
  //   let header = document.querySelector('header');
  //   let navWrapper = document.querySelector('header').firstChild;

  //   console.log(bodyHeight)
  
  //   // ao scrollar para baixo
  //   if(bodyHeight < 11890) {
  //     nav.classList.add("xl:pt-40");
  //     nav.classList.remove("xl:pt-0");
  //     // navbar de linha para coluna
  //     nav.classList.add("xl:flex-col");
  //     nav.classList.remove("xl:flex-row");

  //     //esconder logo
  //     logo.classList.add("xl:hidden");

  //     // mover navbar para esquerda
  //     navWrapper.classList.add("xl:justify-end")
  //     navWrapper.classList.remove("xl:justify-between")

  //     // aumentar altura do Header para que seja possivel ver todos elementos da navbar vertical
  //     header.classList.remove("xl:h-[140px]")
  //     header.classList.add("xl:h-[260px]")

  //     header.classList.remove("lg:pr-[100px]");
  //     header.classList.add("lg:pr-[35px]");
  //   } 
  //   // ao scrollar para o topo novamente
  //     else if(bodyHeight > 11890) {
  //       nav.classList.remove("xl:pt-40");
  //       nav.classList.add("xl:pt-0");
  //       //navbar de coluna para linha
  //       nav.classList.remove("xl:flex-col");
  //       nav.classList.add("xl:flex-row");

  //       //exibir logo
  //       logo.classList.remove("xl:hidden");

  //       // restaurar posição inicial da navbar
  //       navWrapper.classList.remove("xl:justify-end");
  //       navWrapper.classList.add("xl:justify-between");

  //       //restaurar altura inicial do Header
  //       header.classList.remove("xl:h-[260px]")
  //       header.classList.add("xl:h-[140px]")

  //       header.classList.remove("lg:pr-[35px]");
  //       header.classList.add("lg:pr-[100px]");
  //   }
  // }
  // window.addEventListener("scroll", changeNav)

  //verificar se a navbar está acima dos elementos ao recarregar pagina
  // window.addEventListener('load', changeNav)


  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)
  return (
    <motion.section 
      // initial={{opacity: 0, y: '100%'}}
      // animate={{opacity: 1, y: 0}}
      // exit={{opacity: 0, y: '100%'}}
      // transition={transition1}
      className='section flex items-center justify-center h-full'>

      {/* No modo Desktop */}
      <div className='hidden lg:block container max-w-max mx-auto h-full w-full relative cursor-pointer lg:ml-0 lg:mr-0'>
        {/* inicio */}
        <div className='flex flex-col lg:flex-row h-full items-center 
        justify-center gap-x-24 px-10 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
          initial={{ opacity: 0, y: '-60%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-60%' }}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className='flex flex-col lg:items-start h-[732px]'
          >
              <h1 className='h1 pb-0 mt-0 lg:mt-40'>Portfólio</h1>
              <div className='pb-5 lg:pb-20 w-full max-w-[28rem]'>
                <a className='text-[20px]'>Página dedicada para mostrar brevemente meu trabalho como fotógrafo.</a>
              </div>
              <div className='flex flex-row gap-x-10'>
                <Link to={'/contact'} className='btn mb-0 mx-auto lg:mx-auto '>
                    Contate-me <FaArrowRight className='ml-2' />
                </Link>
                <Link to={'/about'} className='btn bg-[#ffffff] border-[2px] border-[#000000] text-[#000000] mb-0 mx-auto lg:mx-auto '>
                    Sobre mim
                </Link>
              </div>
          </motion.div>

          {/* THUMBS*/}
          <motion.div 
          initial={{ opacity: 0, y: '-40%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-40%' }}
          transition={transition1}
          className='grid grid-cols-2 gap-2 m-2 relative'>
            {/* image */}
            <motion.div
            whileHover={{opacity: '0.5'}}
            className='max-w-[540px] lg:max-w-[320px] h-[420px] lg:h-[360px]
            bg-accent overflow-hidden' onClick={(ev)=>{ log(ev) }}>
              <div className='relative' id='0'>
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
              <div className='relative' id='1'>
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
              <div className='relative' id='2'>
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
              <div className='relative' id='3'>
                <a>
                  {/* <BsFillArrowRightSquareFill className='z-10 m-2 bottom-0 right-0 absolute w-8 h-8 bg-white rounded-md' /> */}
                </a>
                <img className='w-[540px] object-top object-cover h-[420px] lg:h-[360px] 
                hover:scale-110 transition-all duration-500 rounded' src={Thumb4} alt=''/>
              </div>
            </motion.div> 
          </motion.div>
        </div>

        {/* IMAGE GRIDS */}
        <div className="container mx-auto pt-30 pb-10">
          {/* fotografia de moda */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] lg:text-7xl my-5'>ensaio para marca</h1>
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
            <h1 className='h1_v1 text-[42px] lg:text-7xl my-5'>fotografia esportiva</h1>
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
            <h1 className='h1_v1 text-[42px] lg:text-7xl my-5'>ensaio</h1>
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
          {/* ENSAIO CORPORATIVO */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] lg:text-7xl my-5'>ensaio corporativo</h1>
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
          {/* fotografia pre-wedding */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] lg:text-7xl my-5'>pre-wedding</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                <img className='img__zoom object-cover' src={Photo2_5} alt=''/>
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_5} />
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo1_5} />
              </div>
            </div>
          </div>
          {/* ensaio gastronomico */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] lg:text-7xl my-5'>ensaio gastronômico</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                <img className='img__zoom object-cover' src={Photo2_6} alt=''/>
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_6} />
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo1_6} />
              </div>
            </div>
          </div>

          {/* ensaio gestante */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] lg:text-7xl m-2 text-left'>ensaio de gestante</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                <img className='img__zoom object-cover' src={Photo2_7} alt=''/>
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_7} />
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo1_7} />
              </div>
            </div>
          </div>

          {/* ensaio de famila */}
          <div className='reveal id pt-20 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] lg:text-7xl m-2 text-left'>ensaio de família</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                <img className='img__zoom object-cover' src={Photo2_8} alt=''/>
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_8} />
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo1_8} />
              </div>
            </div>
          </div>

          {/* Miscelanea */}
          <div className='container pt-20 pb-20 flex flex-col justify-center items-center'>
            <h1 className='h1_v1 text-[42px] lg:text-7xl m-5 w-[100%]'>outros...</h1>
            <div className='grid grid-cols-3 grid-rows-3 gap-4 w-[100%]'>
              <div className='rounded overflow-hidden flex row-span-2'>
                <img className='img__zoom object-cover' src={m_photo_1} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex'>
                <img className='img__zoom object-cover' src={m_photo_4} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex row-span-2'>
                <img className='img__zoom object-cover' src={m_photo_2} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex'>
                <img className='img__zoom object-cover' src={m_photo_3} alt=''/>
              </div>
              
              <div className='rounded overflow-hidden flex row-span-2'>
                <img className='img__zoom object-cover' src={m_photo_6} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex'>
                <img className='img__zoom object-cover' src={m_photo_5} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex row-span-2'>
                <img className='img__zoom object-cover' src={m_photo_8} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex'>
                <img className='img__zoom object-cover' src={m_photo_7} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex row-span-2'>
                <img className='img__zoom object-cover' src={m_photo_9} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex'>
                <img className='img__zoom object-cover' src={m_photo_11} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex row-span-2'>
                <img className='img__zoom object-cover' src={m_photo_10} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex'>
                <img className='img__zoom object-cover' src={m_photo_12} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex row-span-2'>
                <img className='img__zoom object-cover' src={m_photo_13} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex'>
                <img className='img__zoom object-cover' src={m_photo_15} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex row-span-2'>
                <img className='img__zoom object-cover' src={m_photo_14} alt=''/>
              </div>
              <div className='rounded overflow-hidden flex'>
                <img className='img__zoom object-cover' src={m_photo_16} alt=''/>
              </div>
            </div>

            <button onClick={goTop} className='btn mt-20'>VOLTAR PARA O TOPO</button>
          </div>
        </div>

      </div>

      {/* No modo Mobile */}
      <div className='block lg:hidden container mx-auto h-full relative cursor-pointer'>
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
          className='flex flex-col lg:items-start h-auto pb-5'
          >
              <h1 className='h1 pb-0 mt-0 xl:mt-40'>Portfólio</h1>
              <br />
              <div className='pb-5 xl:pb-20 mx-4'>
                <a className='text-[20px]'>Página dedicada para mostrar brevemente meu trabalho.</a>
              </div>
              <div className='flex flex-row mx-3'>
                <Link to={'/contact'} className='btn mb-0 mx-auto lg:mx-0'>
                    Contate-me
                </Link>
                <Link to={'/about'} className='btn bg-[#ffffff] border-[2px] text-[#000000] border-[#000000] mb-0 mx-auto lg:mx-0'>
                    Sobre mim
                </Link>
                
              </div>
          </motion.div>

          <br />

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
            <div className='reveal pt-12 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
              <h1 className='h1_v1 text-[42px] xl:text-7xl m-2 text-left'>ensaio corporativo</h1>
              <div className="title_grid">
                <div className="w-full rounded overflow-hidden flex">
                  <img src={Photo1_4} alt='' className='img__zoom object-cover' />
                </div>
                <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                    <img src={Photo3_4} alt='' className='img__zoom'/>
                </div>
                <div className="w-full rounded overflow-hidden flex">
                    <img src={Photo2_4} className='img__zoom object-cover' alt=''/>
                </div>
              </div>
            </div>
            {/* fotografia de moda */}
            <div className='reveal id pt-12 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
              <h1 className='h1_v1 text-[42px] xl:text-7xl m-2 text-left'>ensaio para marca</h1>
              <div className="title_grid">
                <div className="w-full rounded overflow-hidden">
                    <img className='img__zoom' src={Photo1} alt=''/>
                </div>
                <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                    <img className='img__zoom' src={Photo3} alt=''/>
                </div>
                <div className="w-full rounded overflow-hidden">
                    <img className='img__zoom' src={Photo2} alt=''/>
                </div>
              </div>
            </div>
            {/* esportiva */}
            <div className='reveal id pt-12 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
              <h1 className='h1_v1 text-[42px] xl:text-7xl m-2 text-left'>fotografia esportiva</h1>
              <div className="title_grid">
                <div className="w-full rounded overflow-hidden flex">
                    <img className='img__zoom object-cover' src={Photo1_2} alt='' />
                </div>
                <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                    <img className='img__zoom' src={Photo3_2} alt=''/>
                </div>
                <div className="w-full rounded overflow-hidden flex">
                    <img className='img__zoom object-cover' src={Photo2_2} alt=''/>
                </div>
              </div>
            </div>
            {/* ensaio */}
            <div className='reveal id pt-12 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
              <h1 className='h1_v1 text-[42px] xl:text-7xl m-2 text-left'>ensaio</h1>
              <div className="title_grid">
                <div className="w-full rounded overflow-hidden">
                    <img className='img__zoom' src={Photo1_3} alt='' />
                </div>
                <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                    <img className='img__zoom' src={Photo3_3} alt=''/>
                </div>
                <div className="w-full rounded overflow-hidden">
                    <img className='img__zoom' src={Photo2_3} alt=''/>
                </div>
              </div>
            </div>
            {/* pre-wedding */}
            <div className='reveal id pt-12 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
              <h1 className='h1_v1 text-[42px] xl:text-7xl m-2 text-left'>pre-wedding</h1>
              <div className="title_grid">
                <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo2_5} alt=''/>
                </div>
                <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                    <img className='img__zoom' src={Photo3_5} />
                </div>
                <div className="w-full rounded overflow-hidden flex">
                    <img className='img__zoom object-cover' src={Photo1_5} />
                </div>
              </div>
            </div>

            {/* ensaio gastronomico */}
            <div className='reveal id pt-12 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-2 text-left'>ensaio gastronômico</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                <img className='img__zoom object-cover' src={Photo2_6} alt=''/>
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_6} />
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo1_6} />
              </div>
            </div>
            </div>

            {/* ensaio gestante */}
            <div className='reveal id pt-12 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
              <h1 className='h1_v1 text-[42px] xl:text-7xl m-2 text-left'>ensaio de gestante</h1>
              <div className="title_grid">
                <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo2_7} alt=''/>
                </div>
                <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                    <img className='img__zoom' src={Photo3_7} />
                </div>
                <div className="w-full rounded overflow-hidden flex">
                    <img className='img__zoom object-cover' src={Photo1_7} />
                </div>
              </div>
            </div>
          </div>

          {/* ensaio de famila */}
          <div className='reveal id pt-12 translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000'>
            <h1 className='h1_v1 text-[42px] xl:text-7xl m-2 text-left'>ensaio de família</h1>
            <div className="title_grid">
              <div className="w-full rounded overflow-hidden flex">
                <img className='img__zoom object-cover' src={Photo2_8} alt=''/>
              </div>
              <div className="w-full col-span-2 row-span-2 rounded overflow-hidden">
                  <img className='img__zoom' src={Photo3_8} />
              </div>
              <div className="w-full rounded overflow-hidden flex">
                  <img className='img__zoom object-cover' src={Photo1_8} />
              </div>
            </div>
          </div>

          {/* ensaio externo */}
        <div className='reveal translate-y-[150px] opacity-0 relative transition-all ease-in duration-1000 container pt-12 pb-12 max-w-max flex flex-col justify-center items-center'>
          <h1 className='h1_v1 text-[42px] xl:text-7xl m-5 self-start'>outros...</h1>
          <div className='grid grid-cols-3 grid-rows-3 gap-4 w-[90%]'>
            <div className='rounded overflow-hidden flex row-span-2'>
              <img className='img__zoom object-cover' src={m_photo_1} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex'>
              <img className='img__zoom object-cover' src={m_photo_4} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex row-span-2'>
              <img className='img__zoom object-cover' src={m_photo_2} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex'>
              <img className='img__zoom object-cover' src={m_photo_3} alt=''/>
            </div>
            
            <div className='rounded overflow-hidden flex row-span-2'>
              <img className='img__zoom object-cover' src={m_photo_6} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex'>
              <img className='img__zoom object-cover' src={m_photo_5} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex row-span-2'>
              <img className='img__zoom object-cover' src={m_photo_8} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex'>
              <img className='img__zoom object-cover' src={m_photo_7} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex row-span-2'>
              <img className='img__zoom object-cover' src={m_photo_9} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex'>
              <img className='img__zoom object-cover' src={m_photo_11} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex row-span-2'>
              <img className='img__zoom object-cover' src={m_photo_10} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex'>
              <img className='img__zoom object-cover' src={m_photo_12} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex row-span-2'>
              <img className='img__zoom object-cover' src={m_photo_13} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex'>
              <img className='img__zoom object-cover' src={m_photo_15} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex row-span-2'>
              <img className='img__zoom object-cover' src={m_photo_14} alt=''/>
            </div>
            <div className='rounded overflow-hidden flex'>
              <img className='img__zoom object-cover' src={m_photo_16} alt=''/>
            </div>

          </div>
            <button onClick={goTop} className='btn mt-20'>VOLTAR PARA O TOPO</button>
        </div>
        </div>
      </div>
      
    </motion.section>
  );
};

export default Portfolio;
