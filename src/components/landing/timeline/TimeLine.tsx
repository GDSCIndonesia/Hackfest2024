import { motion } from "framer-motion"

export default function TimeLine() {
  return (
    <section className='timeline' id='timeline'>
        <motion.div 
        initial={{ opacity: 0, x:150 }}
        whileInView={{ opacity: 1, x:0 }}
        transition={{ 
          duration: 0.3
        }} >
            <h1>Timeline</h1>
            <p>This is a magical timeline that can make your heart beat faster.</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y:150 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ 
                duration: 0.5
            }} 
        >
            <div className='startEndGrid'>
                <div className='startEndCol'>
                    <div className='absolute w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                    <div className='startEndFrame'>
                        <h1>Start</h1>
                    </div>
                </div>
                <div className='hidden sm:col-span-6 lg:col-span-4 w-full bg-red-500'></div>
                <div className='hidden lg:col-span-4 w-full bg-red-500'></div>
            </div>
            <div className='timeGrid'>
                <div className='timeCol '>
                    <div className='absolute w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                    <div className='hidden sm:block sm:absolute w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                    <div className='absolute sm:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                    <div className='timeFrame bg-softGrey'>
                        <div className='timeContent'>
                            <h1>Info Session</h1>
                            <p>Join the GDSC Indonesia HackFest Info Session to uncover exciting details about the upcoming hackfest. Dive into innovation and creativity with us!</p>
                        </div>
                        <div className='dateBottom'>
                            <h1>December 06, 2023</h1>
                        </div>
                    </div>
                </div>
                <div className='timeCol'>
                    <div className='absolute sm:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                    <div className='hidden sm:block sm:absolute w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                    <div className='hidden lg:block lg:absolute w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                    <div className='absolute lg:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                    <div className='timeFrame bg-hackRed'>
                        <div className='timeContent'>
                            <h1>Registration</h1>
                            <p>Registration opens December 6–15, 2023. Secure your spot for the GDSC Indonesia HackFest and be part of the innovation wave!</p>
                        </div>
                        <div className='dateBottom'>
                            <h1>December 06, 2023 - December 15, 2023</h1>
                        </div>
                    </div>
                </div>
                <div className='timeCol '>
                    <div className='hidden sm:block sm:absolute w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                    <div className='absolute sm:hidden lg:absolute lg:block w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                    <div className='absolute lg:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                    <div className='timeFrame bg-hackYellow'>
                        <div className='timeContent'>
                            <h1>Announcement of Participant</h1>
                            <p>Stay tuned for the announcement of participants! Excitement is building up as we reveal the talented individuals joining the GDSC Indonesia HackFest. Are you ready to be recognized among the innovators?</p>
                        </div>
                        <div className='dateBottom'>
                            <h1>December 16, 2023</h1>
                        </div>
                    </div>
                </div>
                <div className='timeCol '>
                    <div className='absolute sm:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                    <div className='absolute w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                    <div className='hidden lg:block lg:absolute w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                    <div className='hidden sm:block sm:absolute lg:hidden w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                    <div className='timeFrame bg-hackBlue'>
                        <div className='timeContent'>
                            <h1>Updating Shortly</h1>
                            <p>Updating shortly...</p>
                        </div>
                        <div className='dateBottom'>
                            <h1>Updating Shortly</h1>
                        </div>
                    </div>
                </div>
                <div className='timeCol row-start-5 sm:row-start-3 lg:row-start-2 lg:col-start-5'>
                    <div className='hidden lg:block lg:absolute w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                    <div className='hidden sm:block sm:absolute w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                    <div className='absolute lg:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                    <div className='absolute sm:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                    <div className='timeFrame bg-softGrey'>
                        <div className='timeContent'>
                            <h1>1st Stage Submission</h1>
                            <p>Ready for the 1st Stage Submission? Showcase your skills in the GDSC Indonesia HackFest and take the first step towards victory!</p>
                        </div>
                        <div className='dateBottom'>
                            <h1>December 24, 2023 - January 02, 2024</h1>
                        </div>
                    </div>
                </div>
                <div className='timeCol row-start-4 sm:row-start-2 lg:col-start-9'>
                    <div className='hidden lg:block lg:absolute w-[20px] h-[10px] bg-softDark left-0 top-1/2 -translate-y-1/2'></div>
                    <div className='hidden sm:block sm:absolute lg:hidden w-[20px] h-[10px] bg-softDark right-0 top-1/2 -translate-y-1/2'></div>
                    <div className='absolute sm:hidden lg:absolute lg:block w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                    <div className='absolute lg:hidden w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 bottom-0'></div>
                    <div className='timeFrame bg-hackGreen'>
                        <div className='timeContent'>
                            <h1>Technical Meeting</h1>
                            <p>Prepare for the GDSC Indonesia HackFest Technical Meeting! Delve into details, discuss strategies, and ensure you&#39;re ready for an exciting coding experience. Don&#39;t miss this crucial session!</p>
                        </div>
                        <div className='dateBottom'>
                            <h1>December 16, 2023</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='startEndGrid'>
                <div className='startEndCol sm:col-start-7 lg:col-start-1'>
                    <div className='absolute w-[10px] h-[20px] bg-softDark right-1/2 -translate-x-1/2 top-0'></div>
                    <div className='startEndFrame'>
                        <h1>Finish</h1>
                    </div>
                </div>
                <div className='hidden sm:col-span-6 lg:col-span-4 w-full bg-red-500'></div>
                <div className='hidden lg:col-span-4 w-full bg-red-500'></div>
            </div>
        </motion.div>
    </section>
  )
}
