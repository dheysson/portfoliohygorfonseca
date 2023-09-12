import React, {useContext} from 'react';

import Photographer from '../img/contact/photographer.png';

import { motion } from 'framer-motion';

import {transition1} from '../transitions'

import { CursorContext } from '../context/CursorContext'

const Contact = () => {
  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext);
  return (
    <motion.section
    initial={{opacity: 0, y: '-60%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '-60%'}}
    transition={transition1}
    className='section xl:overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center 
         justify-start pt-36 gap-x-8 text-center lg:text-center'>
          {/* bg */}
          <div className='hidden lg:flex bg-[#ffe8d0] absolute
           bottom-0 left-0 right-0 top-72 -z-10'></div>
          {/* text and form */}
          <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className='lg:flex-1 lg:pt-32 px-4'
           >
            <h1 className='h1'>contate-me</h1>
            <p className='mb-12'>Eu adoraria receber sugestões de você.</p>
            {/* form */}
            <form className='flex flex-col gap-y-4 '>
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary 
                h-[60px] bg-transparent font-secondary w-full pl-3 
                placeholder:text-[#757879]' type='text' placeholder='Seu nome'>
                </input>
                <input className='outline-none border-b border-b-primary 
                h-[60px] bg-transparent font-secondary w-full pl-3 
                placeholder:text-[#757879]' type='text' placeholder='Seu email'>
                </input>
              </div>
              <input className='outline-none border-b border-b-primary 
                h-[60px] bg-transparent font-secondary w-full pl-3 
                placeholder:text-[#757879]' type='text' placeholder='Sua mensagem'>
                </input>
                <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                  Enviar
                </button>
            </form>
          </div>
          {/* image */}
          <motion.div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className='lg:flex-1'>
            <img src={Photographer} alt=''/>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
