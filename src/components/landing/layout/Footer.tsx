import React from 'react'

// Icons
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-softDark'>
        <div className='footerContent'>
            <div>
                <img src='/libraries/images/svg/gdscindonesiaLong.svg' className='footerLogo'/>
            </div>
            <div className='footerFlex'>
                <a href='https://www.youtube.com/@gdscindonesia'>
                    <FaYoutube className='text-white'/>
                </a>
                <a href='https://twitter.com/gdscindonesia'>
                    <FaTwitter className='text-white'/>
                </a>
                <a href='https://instagram.com/gdscindonesia'>
                    <FaInstagram className='text-white'/>
                </a>
            </div>
            <div className='footerCopy'>
                <h1>Ⓒ 2024 All rights reserved GDSC Indonesia.</h1>
            </div>
        </div>
        <div className='footDown'>
            <div className='w-full h-[20px] border-2 border-hackBlack border-r-2 bg-hackBlue'></div>
            <div className='w-full h-[20px] border-2 border-hackBlack border-r-2 bg-hackRed'></div>
            <div className='w-full h-[20px] border-2 border-hackBlack border-r-2 bg-hackYellow'></div>
            <div className='w-full h-[20px] border-2 border-hackBlack border-r-2 bg-hackGreen'></div>
        </div>
    </footer>
  )
}
