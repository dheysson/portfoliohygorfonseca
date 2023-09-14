import React, {useContext} from 'react';

import { CursorContext } from '../context/CursorContext';

//import icons
import {
  ImInstagram,
  ImWhatsapp
} from 'react-icons/im'

const Socials = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext)
  return (
    <div 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaverHandler}
    className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-10'>
        <li>
          <a href='https://www.instagram.com/ph.hygorfonseca/' target='_blank'>
          <ImInstagram className='w-[22px] h-[22px]' />
          </a>
        </li>
        <li>
          <a href='https://api.whatsapp.com/send?phone=5569999505421&text=Ol%C3%A1%2C+vim+pelo+site.' target='_blank'>
          <ImWhatsapp className='w-[22px] h-[22px]'/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
