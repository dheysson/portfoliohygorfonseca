import React, {useContext} from 'react';

import Photographer from '../img/contact/photographer.png';

import { motion } from 'framer-motion';

import {transition1} from '../transitions'

import { CursorContext } from '../context/CursorContext'

import {
  ImInstagram,
  ImWhatsapp
} from 'react-icons/im'

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
            <h1 className='h1_v1 mb-10'>contate-me</h1>
            <div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className='flex justify-center mb-20'
            >
              <ul className='flex gap-x-20'>
                <li>
                  <a href='https://www.instagram.com/ph.hygorfonseca/' target='_blank'>
                  <ImInstagram className='w-[32px] h-[32px] xl:w-[64px] xl:h-[64px]' />
                  </a>
                </li>
                <li>
                  <a href='https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5569999505421%26text%3DOl%25C3%25A1%252C%2Bvim%2Bpelo%2Binsta.&e=AT05H_r3DuEEcZf4C6bzRxAskTd4sXoXWOCqcJGu_44fjzguaDsnQ1XKm7Qt5MLJUEqWUnw9HFJpZSb5XnZiyM6rLctK82f2RywF1PiSEL0bJu32folz0w' target='_blank'>
                  <ImWhatsapp className='w-[32px] h-[32px] xl:w-[64px] xl:h-[64px]'/>
                  </a>
                </li>
              </ul>
            </div>
              <p className='mb-12'>Eu adoraria receber sugestões de você.</p>
                {/* <form className='flex flex-col gap-y-4 '>
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
                </form> */}
            </div>
          {/* image */}
          <motion.div
          className='lg:flex-1'>
            <img src={Photographer} alt=''/>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
