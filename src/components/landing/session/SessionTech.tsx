import { motion } from "framer-motion"

export default function SessionTech() {
  return (
    <section className='sessionTech'>
        <motion.div
            initial={{ opacity: 0, x:150 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ 
                duration: 0.5
            }}
            className='sessionTechTop'
        >
            <h1>Sessions and Tech Talk</h1>
            <p>Enhance yourself by attending tech talk sessions led by experts.</p>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, y:-150 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ 
                duration: 0.5
            }}
            className='sessionTechGrid'
        >
            <div className='sessionCol'>
                <div className='timeFrame bg-hackBlue greyShadow'>
                    <div className='timeContent'>
                        <div>
                            <img src="/libraries/images/png/peoples/jason.png" alt="Jason Jeremy" />
                        </div>
                        <h1>Info Session HackFest</h1>
                        <h2>Jason Jeremy Wijadi</h2>
                        <p>Co-Founder of Wonder Reader</p>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='dateBottom'>
                            <h1>December 06, 2023</h1>
                        </div>
                        <div className='dateBottom'>
                            <h1>07.30 PM - 09.00 PM</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sessionCol'>
                <div className='timeFrame bg-hackRed greyShadow'>
                    <div className='timeContent'>
                        <div>
                            <img src="/libraries/images/png/peoples/abadi.png" alt="Abadi Suryo" />
                        </div>
                        <h1>Info Session HackFest</h1>
                        <h2>Abadi Suryo Setiyo</h2>
                        <p>Winner HackFest 2023</p>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='dateBottom'>
                            <h1>December 06, 2023</h1>
                        </div>
                        <div className='dateBottom'>
                            <h1>07.30 PM - 09.00 PM</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sessionCol'>
                <div className='timeFrame bg-hackYellow greyShadow'>
                    <div className='timeContent'>
                        <div>
                            <img src="/libraries/images/png/peoples/nino.png" alt="" />
                        </div>
                        <h1>Design Thinking</h1>
                        <h2>Rizqi Nino Firmansyah</h2>
                        <p>Coordinator Leader UXiD Bandung</p>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='dateBottom'>
                            <h1>December 09, 2023</h1>
                        </div>
                        <div className='dateBottom'>
                            <h1>07.30 PM - 09.00 PM</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sessionCol'>
                <div className='timeFrame bg-hackGreen greyShadow'>
                    <div className='timeContent'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <h1>-</h1>
                        <h2>TBA</h2>
                        <p>Coming Soon</p>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='dateBottom'>
                            <h1>You&#39;ll know it</h1>
                        </div>
                        <div className='dateBottom'>
                            <h1>11 AM - 1 PM</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sessionCol'>
                <div className='timeFrame bg-softGrey greyShadow'>
                    <div className='timeContent'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <h1>-</h1>
                        <h2>TBA</h2>
                        <p>Coming Soon</p>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='dateBottom'>
                            <h1>You&#39;ll know it</h1>
                        </div>
                        <div className='dateBottom'>
                            <h1>11 AM - 1 PM</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sessionCol'>
                <div className='timeFrame bg-hackBlue greyShadow'>
                    <div className='timeContent'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <h1>-</h1>
                        <h2>TBA</h2>
                        <p>Coming Soon</p>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='dateBottom'>
                            <h1>You&#39;ll know it</h1>
                        </div>
                        <div className='dateBottom'>
                            <h1>11 AM - 1 PM</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </motion.div>
    </section>
  )
}
