import React from 'react'
import skills from '../services/skills'
import Card from './cards/SkillCard'
import {motion} from 'motion/react';

const Skill = () => {

    const cardVarient = {
    hidden:{opacity:0, y:-30},
    visible:{opacity:100, y:0, transition:{
      type:"spring",
      stiffness:100,
      damping:10
    }}
  }

  const containerVarient = {
    hidden:{},
    visible:{
      transition:{
        staggerChildren:0.5,
        delayChildren:1
      }
    }
  }

  return (  
    <div id='skills' className='w-full bg-black md:px-30 px-5 overflow-x-hidden flex flex-col gap-10 py-10 min-w-93.75'>
        <motion.h1
        initial={{opacity:0,x:-40}}
        whileInView={{opacity:100, x:0}}
        transition={{type:"tween",delay:0.2,duration:0.6,ease:"easeInOut"}}
        className='heading-primary-large text-sky-300'>Skills</motion.h1>
        <motion.div variants={containerVarient} initial={"hidden"} whileInView={"visible"} className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            {
            skills.map((skill,idx) => {
                return <motion.div variants={cardVarient} key={idx} className='md:flex-1 w-full'>
                     <Card tech={skill.tech} skills = {skill.skills}/>
                </motion.div>
            })
        }
        </motion.div>
    </div>
  )
}

export default Skill