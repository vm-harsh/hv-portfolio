import React from 'react'
import skills from '../services/skills'
import Card from './cards/SkillCard'

const Skill = () => {
  return (  
    <div id='skills' className='w-full bg-black md:px-30 px-5 overflow-x-hidden flex flex-col gap-10 py-10 min-w-[375px]'>
        <h1 className='heading-primary-large text-sky-300'>Skills</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            {
            skills.map((skill,idx) => {
                return <div key={idx} className='md:flex-1 w-full'>
                     <Card tech={skill.tech} skills = {skill.skills}/>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default Skill