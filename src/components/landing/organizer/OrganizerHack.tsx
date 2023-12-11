import { motion } from "framer-motion"

export default function OrganizerHack() {
  return (
    <section className='organizer'>
        <motion.div 
          initial={{ opacity: 0, x:-150 }}
          whileInView={{ opacity: 1, x:0 }}
          transition={{ 
              duration: 0.5
          }}
        className='organizerTop'>
            <h1>Organizer</h1>
            <p>Meet the organizers behind GDSC Indonesia HackFest. Get to know the team working hard to make this event unforgettable!</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x:150 }}
          whileInView={{ opacity: 1, x:0 }}
          transition={{ 
              duration: 0.5
          }}
        className='organizerGrid'>
            <div className='organizerCol'>
                <img src='/libraries/images/svg/gdscindonesiaLong.svg' className='footerLogo'/>
            </div>
        </motion.div>
    </section>
  )
}
