"use client"

import Countdown from 'react-countdown';
import { motion } from "framer-motion"

interface RendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDown() {
  const renderer = ({ days, hours, minutes, seconds }: RendererProps) => (
    <div className='flex'>
      <div className='flex w-full'>
        <div className='countFrame rounded-l-[10px] md:rounded-l-[20px]'>
          <div className='countNumber'>{days}</div>
          <div className='countStatus'>Days</div>
        </div>
        <div className='countFrame'>
          <div className='countNumber'>{hours}</div>
          <div className='countStatus'>Hours</div>
        </div>
      </div>
      <div className='flex w-full'>
        <div className='countFrame'>
          <div className='countNumber'>{minutes}</div>
          <div className='countStatus'>Minutes</div>
        </div>
        <div className='countFrame border-r-2 rounded-r-[10px]  md:rounded-r-[20px]'>
          <div className='countNumber'>{seconds}</div>
          <div className='countStatus'>Seconds</div>
        </div>
      </div>
    </div>
  );

  const eventDate = new Date("2023-12-24T00:00:00");

  return (
    <div
    className='countdown' id='events'>
      <div className='countGrid'>
        <motion.div 
        initial={{ opacity: 0, x:-150 }}
        whileInView={{ opacity: 1, x:0 }}
        transition={{
          ease: "easeInOut", 
          duration: 0.5
        }} 
        className='countText'>
          <h1>Keep Up to Date</h1>
          <p>As a front-end developer, I find myself in a perpetual race against time. However, unlike the elements in my code, time refuses to be debugged or optimized. So, make sure you do not run out of time.</p>
          <a href="https://links.gdsc-hackfest.com/bookletHackFest2024" target="_blank">
              Download Booklet
          </a>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x:150 }}
        whileInView={{ opacity: 1, x:0 }}
        transition={{
          ease: "easeInOut", 
          duration: 0.5
        }} 
        className='countDate'>
          <div>
            <h1>First Stage Submission Open</h1>
            <p>Don&#39;t worry, it&#39;s just shrinking bit by bit. Like my motivation during Monday mornings</p>
            <Countdown date={eventDate} renderer={renderer} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
