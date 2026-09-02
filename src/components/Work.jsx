import React from 'react'
import WorkCard from './cards/WorkCard';
import works from '../services/work'
import {motion} from 'motion/react';

const cardVarient = {
  hidden:{
    opacity:0,
    x:300
  },
  visible:{
    opacity:100,
    x:0,
    transition:{
      type:"spring",
      stiffness:100,
      damping:20,
      ease:"easeOut"
    }
  }
}

const containerVarient = {
  hidden: {},
  visible:{
    transition:{
      staggerChildren:0.6,
      delayChildren:0.6
    }
  }
}

const Work = () => {
  return (
    <div id='work' className='w-full bg-black md:px-30 px-5 overflow-x-hidden py-5 flex flex-col gap-10 min-w-93.75'>
        <motion.h1
        initial={{opacity:0,x:-40}}
        whileInView={{opacity:100, x:0}}
        transition={{type:"tween",delay:0.2,duration:0.6,ease:"easeInOut"}}
        className='heading-primary-large text-sky-300'>My Work</motion.h1>
        <motion.div variants={containerVarient} initial={"hidden"} whileInView={"visible"} viewport={{amount:0.1}} className='flex flex-wrap justify-center gap-5'>
            {works.map((work,idx) => {
                return <motion.div variants={cardVarient}>
                  <WorkCard key={idx} work={work}/>
                </motion.div>
            })}
        </motion.div>
    </div>
  )
}

export default Work