import React from 'react'
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";

export default function Education() {
  return (
    <div id='Education'>
      <section className="text-white bg-red-800 body-font pt-20">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col text-center w-full mb-20">
    
      <h1 className="sm:text-6xl text-7xl font-black title-font text-white">Education</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-red-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
            <IoSchoolSharp />
            </div>
            <h2 className="text-white text-xl title-font font-semibold">Superior Academy School</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">2012 – 2022  
             Completed matriculation from Superior Academy. Gained a strong foundation in science subjects and developed essential skills for further education.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-red-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-red-700 flex-shrink-0">
            <FaSchool />
            </div>
            <h2 className="text-white text-xl title-font font-semibold">DJ Sindh Govt. Science College</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">2023 – Present

First Year Completion: 2024

Current Status: Currently in the 2nd year of college, focusing on Computer Science (CS) subjects and preparing for future academic and professional opportunities.
</p>

          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-red-900 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
              <FaSchool />
            </div>
            <h2 className="text-white text-xl title-font font-semibold">Governor House IT Course</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Status: Enrolled

Details: Pursuing the IT course at Governor House to expand knowledge and skills in technology, programming, and software development.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
