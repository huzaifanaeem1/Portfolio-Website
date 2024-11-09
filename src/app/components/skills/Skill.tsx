"use client";
import React from "react";
import { FaFigma, FaHtml5 } from "react-icons/fa";
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
    <div id="Skill" className="bg-black pt-20">
      <section className="pt-20">
        <div className="text-center mb-16 pt-10">
          <h1 className="sm:text-7xl text-6xl font-black title-font text-white mb-4 pb-8">
            Skill<span className="text-secondary">s</span>
          </h1>
          <p className="text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto px-4 pt-8">
            I specialize in web development and graphic design, focusing on creating responsive and user-friendly digital solutions. I use modern technologies to build visually appealing and functional websites that emphasize a smooth user experience. My passion lies in developing seamless interfaces, whether in front-end development or design. I stay up-to-date with the latest trends to ensure my work remains innovative and effective.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-4xl">
          <Skillcard skill="HTML" icon={FaHtml5} />
          <Skillcard skill="CSS" icon={FaCss3Alt} />
          <Skillcard skill="JavaScript" icon={IoLogoJavascript} />
          <Skillcard skill="TypeScript" icon={SiTypescript} />
          <Skillcard skill="React" icon={FaReact} />
          <Skillcard skill="Tailwind" icon={RiTailwindCssFill} />
          <Skillcard skill="Figma" icon={FaFigma} />
        </div>

        <section>
          <div className="container px-4 py-8 mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-4xl">
              <Skillcard skill="VS Code" icon={SiVisualstudiocode} />
              <Skillcard skill="GitHub" icon={FaGithub} />
              <Skillcard skill="Vercel" icon={IoLogoVercel} />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
