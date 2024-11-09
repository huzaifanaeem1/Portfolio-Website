import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Todo List",
      imageSrc: "/images/todo.jpg",
      link: "https://nextjs-todo-list-cyan.vercel.app/",
    },
    {
      id: 2,
      name: "CountDown Timer",
      imageSrc: "/images/count.png",
      link: "https://countdown-mu-nine.vercel.app/",
    },
    {
      id: 3,
      name: "Travel Website",
      imageSrc: "/images/world.jpeg", 
      link: "https://worldtravelagency.vercel.app/",
    },
    {
      id: 4,
      name: "Figma To Html",
      imageSrc: "/images/figma.jpg",
      link: "https://figma-design-into-html.vercel.app/",
    },
    {
      id: 5,
      name: "Country List",
      imageSrc: "/images/country.jpg", // Local path
      link: "https://giaic-countrylist-assignment.vercel.app/",
    },
    {
      id: 6,
      name: "Fitness Website",
      imageSrc: "/images/gym.jpg", // Local path
      link: "https://evolve-fit.vercel.app/",
    },
  ];

  return (
    <section className="bg-stone-950 pt-[220px] pb-32 body-font">
      <div className="container mx-auto text-center">
        <h1 className="sm:text-7xl text-6xl text-white font-bold">Port<span className="text-secondary">folio</span> </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal text-white mb-5 pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12">
  Showcasing My Passion for Development: Transforming Ideas into Functional and Creative Web Solutions
</p>


        {/* <p className="mb-8 text-white px-4 pt-8 pb-8">
        Showcasing My Passion for Development
        </p> */}
        <div className=" container flex flex-wrap justify-center items-center gap-10">
          {projects.map((project) => (
            <ProjectCard
              name={`Project ${project.id} - ${project.name}`}
              image={project.imageSrc}
              alt={`Project ${project.id}`}
              link={project.link}
              key={project.id}
            />
          ))}
        </div>
        <a href="https://github.com/huzaifanaeem1" target="_blank" rel="noopener noreferrer"> 
        <button className="bg-primary flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-secondary focus:outline-none">   
             <img className="w-15 h-10" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" /> 
         <span className="ml-4 flex items-start flex-col leading-none">
           <span className="text-medium text-black mb-1">GitHub</span>
           <span className="text-black font-bold title-font">@Huzaifa Naeem
           </span>
         </span>
      </button>
   </a>
      </div>
    </section>
  );
}