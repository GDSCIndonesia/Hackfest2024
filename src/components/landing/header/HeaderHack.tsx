import { motion } from "framer-motion"

export default function HeaderHack() {
  return (
    <section className='headerHack topBackground' id='about'>
        <motion.div 
            initial={{ opacity: 0, y:-150 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ 
                duration: 0.5
            }}
        className='headerGrid'>
            <div className='headLeft'>
                <h1>HackFest 2024</h1>
                <p>HackFest Indonesia is Indonesia’s hackathonheld by GDSC Indonesia where university studentsof different skills from all over Indonesia can cometogether to experiment and develop impactful software or hardware based onUnited Nation 17 SDGs.</p>
                <a href="https://links.gdsc-hackfest.com/bookletHackFest2024" target="_blank">
                    Download Booklet
                </a>
            </div>
            <div className='headRight'>
                <img src="/libraries/images/gif/header.gif" alt="" />
            </div>
        </motion.div>
        <div className='headFull'>
                <motion.div
                    initial={{ opacity: 0, scale:0.2 }}
                    whileInView={{ opacity: 1, scale:1 }}
                    transition={{ 
                        duration: 0.5
                    }}
                >
                    <h1>Re-registration and Ideation</h1>
                    <p>Lock in your participation and submit your groundbreaking ideas before the clock strikes midnight on Tuesday, December 26th, 2024 23:59 WIB</p>
                    <a href="https://links.gdsc-hackfest.com/IdeaHackfest2024" target="_blank">
                        Re-Register Now
                    </a>
                </motion.div>
            </div>
    </section>
  )
}
