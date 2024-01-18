import { motion } from "framer-motion"
import mentors from "../../../lib/json/mentors.json"

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
            {mentors.map((mentor, i) => (
                <div className='mentorsCol' key={i}>
                    <div className='mentorsImg'>
                        <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                        <img className='mentorsRealImg' src={mentor.image} alt="" />
                    </div>
                    <h1>{mentor.name}</h1>
                    <p>{mentor.company}</p>
                </div>
            ))}
        </motion.div>
    </section>
  )
}
