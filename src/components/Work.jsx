import React from 'react'
import WorkCard from './cards/WorkCard';
import works from '../services/work'

const Work = () => {
  return (
    <div id='work' className='w-full bg-black md:px-30 px-5 overflow-x-hidden py-5 flex flex-col gap-10 min-w-[375px]'>
        <h1 className='heading-primary-large text-sky-300'>My Work</h1>
        <div className='flex flex-wrap justify-center gap-5'>
            {works.map((work,idx) => {
                return <WorkCard key={idx} work={work}/>
            })}
        </div>
    </div>
  )
}

export default Work