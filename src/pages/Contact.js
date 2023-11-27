import React, {useContext, useState, useEffect} from 'react';

import Photographer from '../img/contact/photographer.jpg';

import { motion } from 'framer-motion';

import {transition1} from '../transitions'

import { CursorContext } from '../context/CursorContext'

import emailJS from '@emailjs/browser'

import { FaArrowRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

import {
  ImInstagram,
  ImWhatsapp, ImWarning
} from 'react-icons/im';

const Contact = () => {

  useEffect(() => {
    var sm = window.matchMedia('(max-width: 640px)')
    var md = window.matchMedia('(max-width: 768px)')
    var lg = window.matchMedia('(max-width: 1024px)')
    // var xl = window.matchMedia('(max-width: 1192px)')

    if(sm.matches || md.matches || lg.matches) 
      document.querySelector('header').style.backgroundColor = '#0f0c0c';
  })

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [validEmail, setValidEmail] = useState(false);
  const [emptyValue, setEmptyValue] = useState(false);

  const { SERVICEID = '', TEMPLATEID = '', PUBLICKEY = '' } = process.env;

  const handleChange = (e) => {
    let newProp = form;
    setValidEmail(true);
    newProp[e.target.name] = e.target.value;
    setForm({ ...newProp });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let emptyValues = Object.values(form).some(obj => obj == "");
    setEmptyValue(emptyValues);

    let validEmail = form["email"].toLocaleLowerCase().match(/[a-z]+@[a-z]+\.com(\.br)*/)
    setValidEmail(validEmail);

    const templateParams = {
        from_name: form["name"], message: form["message"], email: form["email"]
    }

    document.querySelectorAll('input').forEach(element => element.value = "")
    if (!emptyValues && validEmail) {
      emailJS.send('service_ys5fnbq', 'template_bw7a7i4', templateParams, 'TZPoFP8sOe4vVKffU')
      .then((res) => {
        alert("email enviado", res.status, res.text)
      })
    }
  }

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
         justify-center pt-36 gap-x-20 text-center lg:text-center'>
          {/* image */}
          <motion.div
          className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none'>
            <img src={Photographer} alt=''/>
          </motion.div>

          {/* bg */}
          <div className='hidden lg:flex bg-white absolute
           bottom-0 left-0 right-0 top-72 -z-10'></div>
          {/* text and form */}
          <motion.div
          initial={{opacity: 0, y: '-80%'}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: '-80%'}}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className='lg:flex-1 lg:pt-0 px-4 mt-10'>
            <h1 className='h1_v1 mb-5 lg:mb-14'>contate-me</h1>
            <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaverHandler} className='flex justify-around mb-5 lg:mb-10'>
              <ul className='flex gap-x-20'>
                <li>
                  <a className='btn p-6' href='https://www.instagram.com/ph.hygorfonseca/' target='_blank'>
                  <ImInstagram className='w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]' />
                  <FaArrowRight className='ml-2' />
                  </a>
                </li>
                <li>
                  <a className='btn p-6' href='https://api.whatsapp.com/send?phone=5569999505421&text=Ol%C3%A1%2C+vim+pelo+site.' target='_blank'>
                  <ImWhatsapp className='w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]'/>
                  <FaArrowRight className='ml-2' />
                  </a>
                </li>
              </ul>
            </div>
              {/* <p className='mb-12'>Eu adoraria receber sugestões de você.</p> */}
                <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
                  <div className='flex gap-x-10'>
                    <div className='flex flex-row'>
                      <input className='outline-none border-b border-b-primary 
                      h-[60px] bg-transparent font-secondary w-full pl-3 
                      placeholder:text-[#757879]' type='text' name='name' placeholder='nome' onBlur={(e) => handleChange(e)}/>
                      { emptyValue && form["name"] === "" ? <ImWarning className='ml-2 w-[26px] h-[26px] self-end' color='red' /> : ""}
                    </div>

                    <div className='flex flex-row w-full'>
                      <input className='outline-none border-b border-b-primary 
                      h-[60px] bg-transparent font-secondary w-full pl-3 
                      placeholder:text-[#757879]' type='text' name='email' placeholder='email' onBlur={(e) => handleChange(e)}/>
                      { emptyValue && form["email"] === "" ? <ImWarning className='ml-2 w-[26px] h-[26px] self-end' color='red' /> : ""}
                      { !validEmail && !form["email"] === "" ? <ImWarning className='ml-2 w-[26px] h-[26px] self-end' color='red' /> : ""}
                    </div>
                  </div>

                  <div className='flex flex-row w-full mb-5 lg:mb-10'>
                    <input className='outline-none border-b border-b-primary 
                      h-[60px] bg-transparent font-secondary w-full pl-3 
                      placeholder:text-[#757879]' type='text' name='message' placeholder='Sua mensagem' onBlur={(e) => handleChange(e)}/>
                      { emptyValue && form["message"] === "" ? <ImWarning className='ml-2 w-[26px] h-[26px] self-end' color='red' /> : ""}
                  </div>

                    <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                      Enviar
                      <IoIosSend className='ml-3 w-[1.5rem] h-[1.5rem]' />
                    </button>
                </form>
            </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
