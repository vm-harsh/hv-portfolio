import React, { useState } from 'react'
import { MdDownload } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import socialLinks from '../services/social';





const Contact = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("harshvermaofficial99@gmail.com");
        setCopied(true);

        setTimeout(()=>{
            setCopied(false);
        },1000) 
    }

  return (
    <div id='contact' className="w-full text-white bg-black md:px-30 px-5 overflow-x-hidden flex flex-col items-center gap-5 py-10 min-w-[375px]">
        <h1 className='heading-primary-large text-sky-300'>Contact Me</h1>

        <h4 className='para'>Let's build something great together</h4>
        <a 
        href='/harsh_verma_resume.pdf'
        download='harsh_verma_resume.pdf'
        className='border px-4 py-2 rounded-full flex gap-2 items-center cursor-pointer shadow-inner shadow-sky-300'>
            Download Resume <MdDownload className='text-xl'/>
        </a>
        <div className='w-full flex justify-evenly py-10'>
            <div className='space-y-4'>
                <div className='relative space-y-1'>
                    <h1 className='para text-sky-400'>Email</h1>
                    <h4 className='cursor-pointer hover:text-sky-200 duration-500' onClick={handleCopy}>harshvermaofficial99@gmail.com</h4>
                    {copied && <p className='absolute top-2 -right-3 md:right-10 px-4 py-2 bg-sky-500 rounded-full text-xs'>Copied!</p>}
                </div>
                <div className='relative space-y-1'>
                    <h1 className='para text-sky-400'>Location</h1>
                    <h4 >Meerut, Uttar Pradesh</h4>
                </div>
            </div>

            <div className='space-y-2'>
                <h1 className='para text-sky-400'>Social Media</h1>

                <div className='flex flex-col items-center gap-1'>
                    {socialLinks.map((social,idx) => {
                        return <a href={social.link} target='_blank' className='flex gap-1 font-semibold hover:text-sky-200 duration-500'>{social.name} <GoArrowUpRight/></a>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact