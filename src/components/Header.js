import React, {useContext, useState} from 'react';

//import components
import Socials from './Socials';
import Logo from '../img/header/logo.webp';
import MobileNav from './MobileNav';

//import Link
import { Link } from 'react-router-dom'
import { CursorContext } from '../context/CursorContext';
const Header = () => {
  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)

 

  return (
    <header className='fixed w-full px-[15px] bg-white  lg:bg-[#ffffff00]
    lg:pr-[50px] lg:pl-[50px] z-30 lg:h-[140px] flex items-center h-[65px]'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* {Logo} */}
        <Link
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaverHandler}
        to={'/'} className='logo max-w-[220px] lg:max-w-[280px]'>
          <img alt='' src={Logo} />
        </Link>
        {/* {nav inicialmente oculto - aparece no modo desktop} */}
        <nav
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaverHandler}
        className='hidden xl:flex gap-x-12 gap-y-12'>
          <Link to={'/'} className=' text-[#000000] hover:text-[#696c6d] transition'> Início </Link>
          <Link to={'/about'} className=' text-[#000000] hover:text-[#696c6d] transition'> Sobre mim</Link>
          <Link to={'/portfolio'} className=' text-[#000000] hover:text--[#696c6d] transition'> Portfólio </Link>
          <Link to={'/contact'} className=' text-[#000000] hover:text-[#696c6d] transition'> Contato </Link>
        </nav>
      </div>
      {/* mobileNav */}
      <MobileNav/>
    </header>
  );
};

export default Header;
