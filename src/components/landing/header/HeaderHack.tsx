import React from 'react'

export default function HeaderHack() {
  return (
    <section className='headerHack'>
        <img className='absolute top-0 right-0' src="/libraries/images/svg/headTopRight.svg" alt="" />
        <img className='absolute bottom-24 left-0' src="/libraries/images/svg/headBottomLeft.svg" alt="" />
        <div className='headerGrid'>
            <div className='headLeft'>
                <h1>HackFest 2024</h1>
                <p>HackFest Indonesia is Indonesia’s hackathonheld by GDSC Indonesia where university studentsof different skills from all over Indonesia can cometogether to experiment and develop impactful software or hardware based onUnited Nation 17 SDGs.</p>
                <a href="#">
                    Learn more
                </a>
            </div>
            <div className='headRight'>
                <img src="/libraries/images/gif/header.gif" alt="" />
            </div>
        </div>
        <div className='headFull'>
                <div>
                    <h1>You know all those great ideas you have? We want you to try them, lots of them, and find out what works.</h1>
                    <p>Register your team now and have the chance of winning one of the most prestigious hackathon events in Indonesia!</p>
                </div>
            </div>
    </section>
  )
}
