import { motion } from "framer-motion";
import style from "./index.module.css"
import judges from "../../../lib/json/judges.json"
import toptens from "../../../lib/json/toptens.json"

export default function JudgesHack() {
  return (
    <section className={style.judgesHack}>
			<motion.div
				initial={{ opacity: 0, x: 150 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
				}}
				className={style.judgesTop}
			>
				<h1>HackFest 2024 Top 20 Judges</h1>
				<p>Let&#39;s meet our Official TOP 20 Judges</p>
			</motion.div>
			<motion.div 
            initial={{ opacity: 0, y:150 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ 
                duration: 0.5
            }}
            className='mentorsGrid'>
            {judges.map((judge, i) => (
                <div className='mentorsCol' key={i}>
                    <div className='mentorsImg'>
                        <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                        <img className='mentorsRealImg' src={judge.image} alt="" />
                    </div>
                    <h1>{judge.name}</h1>
                    <p>{judge.role}</p>
                </div>
            ))}
        </motion.div>
        <motion.div
				initial={{ opacity: 0, x: 150 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
				}}
				className={style.judgesTopTen}
			>
				<h1>HackFest 2024 Top 10 Judges</h1>
				<p>Let&#39;s meet our Official TOP 10 Judges</p>
			</motion.div>
			<motion.div 
            initial={{ opacity: 0, y:150 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ 
                duration: 0.5
            }}
            className={style.mentorsTen}>
            {toptens.map((ten, i) => (
                <div className={style.mentorsColTen} key={i}>
                    <div className='mentorsImg'>
                        <img className='mentorsBorder' src="/libraries/images/svg/circleMentors.svg" alt="" />
                        <img className='mentorsRealImg' src={ten.image} alt="" />
                    </div>
                    <h1>{ten.name}</h1>
                    <p>{ten.role}</p>
                </div>
            ))}
        </motion.div>
		</section>
  )
}
