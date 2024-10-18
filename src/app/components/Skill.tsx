"use client";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import Skillcard from "./Skillcard";

export default function Skill() {
  return (
    <div id="Skill" className="bg-red-900 pt-20"> 
<section>
<div className="text-center mb-20 pt-20">
<h1 className="sm:text-6xl text-7xl font-black text-center title-font text-white mb-4">
  Skills</h1>  
<p className="text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">I specialize in web development and graphic design, focusing on creating responsive and user-friendly digital solutions. I use modern technologies to build visually appealing and functional websites that emphasize a smooth user experience. My passion lies in developing seamless interfaces, whether in front-end development or design. I stay up-to-date with the latest trends to ensure my work remains innovative and effective</p>
</div>
  <div className="container px-4 py-8 mx-auto flex flex-wrap justify-center items-center space-x-6
  text-2xl">     

<Skillcard skill= "HTML" icon= { FaHtml5 }/>
<Skillcard skill= "CSS" icon= {  FaCss3Alt }/>
<Skillcard skill= "JavaScript" icon= { IoLogoJavascript}/>
<Skillcard skill= "TypeScript" icon= { SiTypescript}/>
<Skillcard skill= "React" icon= { FaReact }/>
<Skillcard skill= "Tailwind" icon= { RiTailwindCssFill}/>
</div>
{/* development tool and frame work icons */}
<section>
  <div className="container px-4 py-8 mx-auto flex flex-wrap justify-center items-center space-x-6
  text-2xl">
    {/* icons */}
    <Skillcard skill= "Vs Code" icon= { SiVisualstudiocode }/>
    <Skillcard skill= "Git Hub" icon= {  FaGithub }/>
    <Skillcard skill= "Vercel" icon= {  IoLogoVercel  }/>
  </div>
</section>


</section>
</div>
  )
}