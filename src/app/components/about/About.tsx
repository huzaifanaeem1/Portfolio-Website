import React from "react";
import { IoIosSchool } from "react-icons/io";
import { FaUniversity, FaSchool } from "react-icons/fa";
import profile from "../../../../public/images/about-me.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <section className="text-white bg-stone-950 body-font pt-12 sm:pt-24">
      <div className="flex justify-center flex-col container px-5 py-12 sm:py-24">
        <div className="flex justify-center items-center gap-12 flex-col mt-20 md:mt-0 md:flex-row">
          <div className="w-[300px] rounded-xl">
             {/* Image  */}
            <Image
              src={profile}
              alt={"profile"}
              className="object-fill rounded-3xl"
            /> 
          </div>
          <div className="pt-12 flex justify-center items-center  md:items-start flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold title-font text-center">
              About <span className="text-primary">me</span>
            </h1>
            <p className="text-white text-lg leading-relaxed text-center md:text-left mx-auto max-w-[600px] mt-5">
            - I specialize in web development and graphic design, creating responsive, user-friendly solutions using technologies like React, Next.js, and Tailwind CSS.
             <br />- My skills extend to web development, graphic design, and Object-Oriented Programming (OOP) creating optimized and user-focused digital solutions
              <br />- With experience in tools like Appwrite and Google Sheets automation, I focus on delivering efficient, visually appealing results while staying up-to-date with the latest trends.
            </p>
          </div>
        </div>
  
        <div className="flex flex-wrap m-4 pt-8">
    
          <div className="p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg h-full bg-secondary hover:scale-105 duration-300 p-6 sm:p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white">
                  <IoIosSchool />
                </div>
                <h2 className="text-white text-lg sm:text-xl font-semibold">
                Superior Academy School
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-sm sm:text-base">
                2022 Completed matriculation from Superior Academy. Gained a strong foundation in science subjects and developed essential skills for further education.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg h-full bg-primary hover:scale-105 duration-300 p-6 sm:p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-secondary text-white">
                  <FaUniversity />
                </div>
                <h2 className="text-white text-lg sm:text-xl font-semibold">
                DJ Sindh Govt. Science College
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-sm sm:text-base">
                2023 – Present
First Year Completion: 2024
Current Status: Currently in the 2nd year of college, focusing on Computer Science (CS) subjects and preparing for future academic and professional opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Governor IT Course */}
          <div className="p-4 w-full lg:w-1/3">
            <div className="flex rounded-lg h-full bg-secondary hover:scale-105 duration-300 p-6 sm:p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white">
                  <FaSchool />
                </div>
                <h2 className="text-white text-lg sm:text-xl font-semibold">
                  Governor IT Course
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-sm sm:text-base">
                  Pursuing the IT course at Governor House to expand knowledge
                  and skills in technology, programming, and software
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;