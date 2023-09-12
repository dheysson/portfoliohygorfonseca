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
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://www.instagram.com/ph.hygorfonseca/' target='_blank'>
          <ImInstagram />
          </a>
        </li>
        <li>
          <a href='https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5569999505421%26text%3DOl%25C3%25A1%252C%2Bvim%2Bpelo%2Binsta.&e=AT05H_r3DuEEcZf4C6bzRxAskTd4sXoXWOCqcJGu_44fjzguaDsnQ1XKm7Qt5MLJUEqWUnw9HFJpZSb5XnZiyM6rLctK82f2RywF1PiSEL0bJu32folz0w' target='_blank'>
          <ImWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
