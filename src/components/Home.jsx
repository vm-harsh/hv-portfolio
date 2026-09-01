import React from "react";
import owner from "../../public/owner.png"
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";




const Home = () => {


  return (
    <div id="home" className="w-full bg-black md:px-30 px-5 overflow-x-hidden min-w-[375px]">
      {/* Container */}
      <div className="text-white w-full h-full flex flex-wrap gap-3 py-5">


        {/* Greetings */}
        <div className="py-10 md:py-40">
          <h4 className="heading-secondary">Hello..</h4>
          <h1 className="heading-primary-large text-sky-300">I am <br></br>Harsh Verma</h1>
        </div>

        {/* Developer Image */}
        
        <div className="relative">
            <img src={owner}  className="relative z-10 md:w-150"/>
            <div className="absolute top-0 left-0 w-40 h-40 bg-sky-400 blur "></div>
            <div className="absolute bottom-55 -right-10 md:-right-20 w-40 h-40 bg-sky-400 blur "></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent z-20"></div>
        </div>

        {/* Profession */}

        <div className="text-white text-center">
            <h4 className="heading-secondary text-left">Creative</h4>
            <h1 className="heading-primary-large text-sky-400">MERN Stack</h1>
            <h1 className="heading-primary-large -mt-4">Developer</h1>

        </div>

            {/* Social icons */}
            <ul className="absolute md:bottom-10  right-5 z-20 flex flex-col gap-5 text-3xl">
                <li className="cursor-pointer hover:text-sky-400 duration-500" onClick={()=>window.open("https://github.com/vm-harsh","_blank")}><FaGithub/></li>
                <li className="cursor-pointer hover:text-sky-400 duration-500" onClick={()=>window.open("https://leetcode.com/u/vm-harsh","_blank")}><SiLeetcode/></li>
                <li className="cursor-pointer hover:text-sky-400 duration-500" onClick={()=>window.open("https://linkedin.com/in/vm-harsh","_blank")}><FaLinkedin/></li>
                <li className="cursor-pointer hover:text-sky-400 duration-500" onClick={()=>window.open("https://www.instagram.com/harsh_verma_officials/","_blank")}><RiInstagramFill/></li>
            </ul>
      </div>
    </div>
  );
};

export default Home;
