import React from "react";
import owner from "/owner.png"
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {motion} from 'motion/react'




const Home = () => {

  const cardVarient = {
    hidden:{opacity:0, x:30},
    visible:{opacity:100, x:0, transition:{
      type:"spring",
      stiffness:150,
      damping:10
    }}
  }

  const containerVarient = {
    hidden:{},
    visible:{
      transition:{
        staggerChildren:0.1,
        delayChildren:2.2
      }
    }
  }


  return (
    <div id="home" className="w-full bg-black md:px-30 px-5 overflow-x-hidden min-w-93.75">
      {/* Container */}
      <div className="text-white w-full h-full flex flex-wrap gap-3 py-5">


        {/* Greetings */}
        <motion.div
        initial={{opacity:0,y:-40}}
        whileInView={{opacity:100, y:0}}
        transition={{type:"tween",delay:1.2,duration:1,ease:"easeInOut"}}
        // transition={{type:"spring",stiffness:100,damping:10,delay:1.7, ease:"easeOut"}}
        className="py-10 md:py-40">
          <h4 className="heading-secondary">Hello..</h4>
          <h1 className="heading-primary-large text-sky-300">I am <br></br>Harsh Verma</h1>
        </motion.div>

        {/* Developer Image */}
        
        <motion.div 
        initial={{opacity:0,y:40}}
        whileInView={{opacity:100, y:0}}
        transition={{type:"tween",delay:0.2,duration:1,ease:"easeIn"}}
        className="relative">
            <img src={owner}  className="relative z-10 md:w-150"/>
            <div className="absolute top-0 left-0 w-40 h-40 bg-sky-400 blur animate-pulse"></div>
            <div className="absolute bottom-55 -right-10 md:-right-20 w-40 h-40 bg-sky-400 blur animate-pulse"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent z-20"></div>
        </motion.div>

        {/* Profession */}

        <motion.div
        initial={{opacity:0,y:-40}}
        whileInView={{opacity:100, y:0}}
        transition={{type:"tween",delay:1.2,duration:1,ease:"easeInOut"}}
        className="text-white text-center">
            <h4 className="heading-secondary text-left">Creative</h4>
            <h1 className="heading-primary-large text-sky-400 animate-pulse">MERN Stack</h1>
            <h1 className="heading-primary-large -mt-4 animate-pulse">Developer</h1>

        </motion.div>

            {/* Social icons */}
            <motion.ul variants={containerVarient} initial={"hidden"} whileInView={"visible"} viewport={{once:true}} className="absolute md:bottom-10  right-5 z-20 flex flex-col gap-5 text-3xl">
                <motion.li variants={cardVarient} className="cursor-pointer hover:text-sky-400 duration-500" onClick={()=>window.open("https://github.com/vm-harsh","_blank")}><FaGithub/></motion.li>
                <motion.li variants={cardVarient} className="cursor-pointer hover:text-sky-400 duration-500" onClick={()=>window.open("https://leetcode.com/u/vm-harsh","_blank")}><SiLeetcode/></motion.li>
                <motion.li variants={cardVarient} className="cursor-pointer hover:text-sky-400 duration-500" onClick={()=>window.open("https://linkedin.com/in/vm-harsh","_blank")}><FaLinkedin/></motion.li>
                <motion.li variants={cardVarient} className="cursor-pointer hover:text-sky-400 duration-500" onClick={()=>window.open("https://www.instagram.com/harsh_verma_officials/","_blank")}><RiInstagramFill/></motion.li>
            </motion.ul>
      </div>
    </div>
  );
};

export default Home;
