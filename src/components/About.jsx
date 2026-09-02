import React from 'react'
import owner2 from '/owner2.png'
import {motion} from "motion/react";

const About = () => {

    const education = [
        {
            period: "2023-2027", place: "Meerut Institute Of Engineering and Technology, Meerut", course: "B.Tech, (Computer Science and Engineering)"},
        {
            period:"2022-2023", place:"Police Modern School, Meerut", course:"Higher Secondary Education (12th)"
        },
        {
            period:"2021-2022", place:"Police Modern School, Meerut", course:"Secondary Education (10th)"
        }
    ]

  return (
    <div id='about' className='w-full bg-black md:px-30 px-5 overflow-x-hidden min-w-93.75'>
        {/* container */}
        <div className="text-white md:py-20 py-5 flex flex-wrap md:justify-start justify-evenly gap-5 md:gap-20">
            {/* Developer Image 2 */}
            <motion.div
            initial={{opacity:0,x:40}}
            whileInView={{opacity:100, x:0}}
            transition={{type:"tween",delay:0.2,duration:1,ease:"easeInOut"}}
            viewport={{amout:0.8}}
            className='relative w-100 md:w-130 p-2 border'>
                <img src={owner2} alt="" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent z-20"></div>
                <div className="absolute inset-y-0 right-0 w-20 h-full bg-linear-to-r from-transparent to-black z-20"></div>
            </motion.div>

            {/* About */}
            <motion.div
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:100, x:0}}
            transition={{type:"tween",delay:0.2,duration:1,ease:"easeInOut"}}
            viewport={{amout:0.8}}
            className='flex flex-col justify-center md:py-8 gap-2 md:gap-5'>
                <h1 className='heading-primary-large text-sky-300'>About Me</h1>
                <p className='max-w-150 md:text-xl tracking-wide leading-8'>I'm a B.Tech student and Full-Stack Developer passionate about building scalable, user-friendly web applications. I enjoy solving problems with DSA, exploring new technologies, and turning ideas into real-world products with clean and efficient code.</p>

                <h2 className='heading-secondary text-sky-200 pt-7'>Education</h2>
                {education.map((edu,idx)=>{
                    return <div key={idx}>
                        <h2 className='para text-sky-400'>{edu.period}</h2>
                        <div className='flex justify-between w-full md:gap-10'>
                            <h1>{edu.place}</h1>
                            <h1 className='text-sky-300'>{edu.course}</h1>
                        </div>
                    </div>
                })}
            </motion.div>
        </div>
    </div>
  )
}

export default About