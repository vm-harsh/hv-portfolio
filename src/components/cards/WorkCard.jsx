import React from 'react'
import { RiExternalLinkFill } from "react-icons/ri";


const WorkCard = ({work}) => {
  return (
    <div className='relative px-5 py-8 text-white flex flex-col gap-4 w-80 bg-gray-700 h-100 rounded-2xl overflow-hidden border-2 border-blue-300 group'>
        {/* Count */}
        <div className='w-full flex justify-between'>
            <h1 className='heading-primary font-extrabold'>{work.count}</h1>
            <h4 className='heading-secondary capitalize'>{work.type}</h4>
        </div>
        {/* Project Name and Tech Stack Info */}
        <div>
            <h1 className='text-2xl font-bold mb-4'>{work.name}</h1>
            <h2 className='font-semibold tracking-wide'>Techstack used</h2>
            <h4 className='font-light tracking-wider text-sm'>{work.tech}</h4>
        </div>
        {/* Project Image */}
        <div  className='w-[90%] rounded-2xl overflow-hidden self-center z-10 mt-2'>
            <img src={work.image} alt="" />

            <div className='absolute bg-black text-white bottom-2 right-2 p-3 rounded-full cursor-pointer border-sky-500 border-2 lg:opacity-0 group-hover:opacity-100 duration-500' onClick={()=>{window.open(work.link, '_blank')}}>
                <RiExternalLinkFill  className='text-2xl'/>
            </div>
        </div>

        <div className='absolute bottom-0 right-0 h-40 w-50 bg-sky-400 blur-3xl'>

        </div>
    </div>
  )
}

export default WorkCard