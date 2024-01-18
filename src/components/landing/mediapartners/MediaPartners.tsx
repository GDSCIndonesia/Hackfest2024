import { motion } from "framer-motion"

export default function MediaPartners() {
  return (
    <section className='mediaPartners'>
        <motion.div 
            initial={{ opacity: 0, scale:0.2 }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ 
                duration: 0.5
            }}
        className='mediaPartnersTop'>
            <h1>Media Partners</h1>
            <p>Proudly presents Google HackFest 2024 Official Media Partners.</p>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, y:150 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ 
                duration: 0.5
            }}
        className='mediaPartnersItem'>
            <div>
                <div className='sponsorImg mb-[50px] md:mb-0'>
                    <img src="/libraries/images/png/googleForDevelopers.png" alt="" />
                </div>
                <div className='sponsorImg'>
                    <img src="/libraries/images/png/BACOD.png" alt="" />
                </div>
            </div>
            <div>
                <div className='sponsorImg'>
                    <img src="/libraries/images/png/uiuxindo.png" alt="" />
                </div>
            </div>
        </motion.div>
    </section>
  )
}
