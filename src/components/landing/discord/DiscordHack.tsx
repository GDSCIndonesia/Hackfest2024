import { motion } from "framer-motion"

export default function DiscordHack() {
  return (
    <section className='discord'>
        <div className='discordGrid'>
        <motion.div 
          initial={{ opacity: 0, x:-150 }}
          whileInView={{ opacity: 1, x:0 }}
          transition={{ 
              duration: 0.5
          }}
        className='discordContent'>
          <div>
            <h1 className='discordTop'>
              Join Our
            </h1>
            <h1 className='discordTop'>
              Discord Channel
            </h1>
            <p className='discordPar'>
              Get all the information about HackFest 2024 through the official
              Google Developers Indonesia discord channel. Don&#39;t miss it, make
              sure you join by pressing the button below
            </p>
            <a
              href='https://goo.gle/googledevsid'
              className='discordButton'
            >
              Join Discord
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y:150 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ 
              duration: 0.5
          }}
        className='discordImg'>
        </motion.div>
      </div>
    </section>
  )
}
