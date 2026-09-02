import React from 'react'
import {motion} from 'motion/react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white text-center font-semibold para min-w-93.75 p-5'>
        <motion.p 
        initial={{opacity:0,x:-400}}
        whileInView={{opacity:100, x:0}}
        transition={{type:"tween",delay:0.2,duration:0.6,ease:"easeInOut"}}
        >All Rights Reserved By <span className='text-sky-400'>Harsh Verma</span> <br></br> © 2026</motion.p>
    </div>
  )
}

export default Footer