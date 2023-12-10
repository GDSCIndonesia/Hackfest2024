import { motion } from "framer-motion"

export default function SponsorsHack() {
  return (
    <section className='sponsors'>
        <motion.div 
            initial={{ opacity: 0, scale:0.2 }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ 
                duration: 0.5
            }}
        className='sponsorsTop'>
            <h1>Sponsors</h1>
            <p>Proudly presents Google HackFest 2024 Official Sponsor.</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y:150 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ 
                duration: 0.5
            }}
        className='sponsorsItem'>
            <div className='sponsorImg'>
                <img src="/libraries/images/png/googleForDevelopers.png" alt="" />
            </div>
            <div className='sponsorImg'>
                <img src="/libraries/images/png/googleForDevelopers.png" alt="" />
            </div>
        </motion.div>
    </section>
  )
}
