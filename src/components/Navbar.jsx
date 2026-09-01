import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [menu, setMenu] = useState(false);
  return (
    <div className='w-full h-20 bg-black z-99 flex items-center justify-between px-5 min-w-[375px]'>
        {/* LOGO || NAME*/}
        <h1 className='uppercase text-white font-bold name shadow-sky-400 shadow-xl'>..Harsh..</h1>
        <ul className={`md:flex gap-2 md:gap-4 text-white ${menu && 'absolute top-0 left-0 space-y-2 py-2 text-white bg-black w-full text-center'} ${!menu && 'hidden'} z-30`}>
            <a href='#home' className='cursor-pointer hover:text-sky-300 font-semibold transition-all duration-500 block'>Home</a>
            <a href='#about' className='cursor-pointer hover:text-sky-300 font-semibold transition-all duration-500 block'>About</a>
            <a href='#skills' className='cursor-pointer hover:text-sky-300 font-semibold transition-all duration-500 block'>Skills</a>
            <a href='#work' className='cursor-pointer hover:text-sky-300 font-semibold transition-all duration-500 block'>Work</a>
            <a href='#contact' className='cursor-pointer hover:text-sky-300 font-semibold transition-all duration-500 block'>Contact</a>
            <IoClose className={`absolute top-2 right-2 text-3xl ${!menu && 'hidden'}`} onClick={()=>setMenu(!menu)}/>
        </ul>
        <IoMenu className='text-white text-2xl md:hidden ' onClick={()=>setMenu(!menu)}/>
    </div>
  )
}

export default Navbar