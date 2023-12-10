import { motion } from "framer-motion"
import Marquee from "react-fast-marquee";

// Icons
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-softDark'>
        <motion.div 
            initial={{ opacity: 0, scale:0.2 }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ 
                duration: 0.5
            }}
        className='footerContent'>
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
        </motion.div>
        <div className='footDown'>
            <Marquee>
                <div className='w-[150px] md:w-[400px] 2xl:w-[500px] h-[20px] border-2 border-hackBlack border-r-2 bg-hackBlue'></div>
                <div className='w-[150px] md:w-[400px] 2xl:w-[500px] h-[20px] border-2 border-hackBlack border-r-2 bg-hackRed'></div>
                <div className='w-[150px] md:w-[400px] 2xl:w-[500px] h-[20px] border-2 border-hackBlack border-r-2 bg-hackYellow'></div>
                <div className='w-[150px] md:w-[400px] 2xl:w-[500px] h-[20px] border-2 border-hackBlack border-r-2 bg-hackGreen'></div>
            </Marquee>
        </div>
    </footer>
  )
}
