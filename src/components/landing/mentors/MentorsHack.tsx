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
                    <img className='mentorsRealImg' src="" alt="" />
                </div>
                <h1>TBA</h1>
                <p>Coming Soon</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="" alt="" />
                </div>
                <h1>TBA</h1>
                <p>Coming Soon</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="" alt="" />
                </div>
                <h1>TBA</h1>
                <p>Coming Soon</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="" alt="" />
                </div>
                <h1>TBA</h1>
                <p>Coming Soon</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="" alt="" />
                </div>
                <h1>TBA</h1>
                <p>Coming Soon</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="" alt="" />
                </div>
                <h1>TBA</h1>
                <p>Coming Soon</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="" alt="" />
                </div>
                <h1>TBA</h1>
                <p>Coming Soon</p>
            </div>
            <div className='mentorsCol'>
                <div className='mentorsImg'>
                    <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                    <img className='mentorsRealImg' src="" alt="" />
                </div>
                <h1>TBA</h1>
                <p>Coming Soon</p>
            </div>
        </motion.div>
    </section>
  )
}
