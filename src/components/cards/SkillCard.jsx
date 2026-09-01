import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='relative w-full rounded-2xl flex flex-col p-6 bg-gray-900 overflow-hidden'>
        <h1 className='heading-secondary font-extrabold md:font-bold mb-5 text-white'>{props.tech}</h1>

        <div className='grid grid-cols-2 gap-2'>
            {props?.skills?.map((skill,idx) => {
            const Icon = skill.icon;
            return<div key={idx} className='flex bg-sky-800 p-5 rounded gap-2 text-white z-10'>
                {Icon && <Icon className="text-2xl bg"/>}
                <h4 className='para'>{skill.name}</h4>
            </div>

        })}
        </div>
    </div>
  )
}

export default SkillCard