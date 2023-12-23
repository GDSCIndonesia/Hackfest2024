import { motion } from "framer-motion"

export default function MentorsHack() {
  return (
    <section className='mentors'>
        <motion.div 
            initial={{ opacity: 0, y:-150 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ 
                duration: 0.5
            }}
        className='mentorsTop'>
            <h1>Mentors</h1>
            <p>Unlock exclusive mentorship from experts. Elevate your skills with personalized guidance, ensuring an extraordinary journey to mastery.</p>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, y:150 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ 
                duration: 0.5
            }}
        className='mentorsGrid'>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="/libraries/images/mentors/Restu.png" alt="" />
                </div>
                <h1>Restu Dwi Cahyo</h1>
                <p>Hacker</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="/libraries/images/mentors/AlexanderJason.jpg" alt="" />
                </div>
                <h1>Alexander Jason</h1>
                <p>Hustler</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="/libraries/images/mentors/sambas.jpg" alt="" />
                </div>
                <h1>Sambas Jundi Mahfuzdi</h1>
                <p>Hipster</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="/libraries/images/mentors/MariaCatherine.jpg" alt="" />
                </div>
                <h1>Maria Catherine</h1>
                <p>Hipster</p>
            </div>
        </motion.div>
    </section>
  )
}
