import React from 'react';

import { IoMdMail } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className="bg-[#1b1b1b] text-white flex flex-col justify-center items-center">
            <div className='flex flex-row justify-center items-center mt-4'>
                <IoMdMail color='white' />
                <span>hygorfonseca18@gmail.com</span>
            </div>

            <p className='text-white text-center p-5'>Todos direitos reservados</p>
        </footer>
    )
}

export default Footer;