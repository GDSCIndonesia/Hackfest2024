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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem suscipit enim optio libero sit corrupti saepe obcaecati magni corporis.</p>
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
