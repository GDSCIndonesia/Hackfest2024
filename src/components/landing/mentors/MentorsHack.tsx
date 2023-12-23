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
            <h1>Facilitators</h1>
            <p>Embark on a transformative learning experience with our distinguished facilitators, offering exclusive guidance tailored to your unique journey.</p>
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
                <p>Bandung Coders</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="/libraries/images/mentors/AlexanderJason.jpg" alt="" />
                </div>
                <h1>Alexander Jason</h1>
                <p>IFest Business IT-Case Competition</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="/libraries/images/mentors/sambas.jpg" alt="" />
                </div>
                <h1>Sambas Jundi Mahfuzdi</h1>
                <p>PT. Bank Rakyat Indonesia (Persero) Tbk.</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="/libraries/images/mentors/MariaCatherine.jpg" alt="" />
                </div>
                <h1>Maria Catherine</h1>
                <p>WoiLo, UIUXINDO</p>
            </div>
        </motion.div>
    </section>
  )
}
