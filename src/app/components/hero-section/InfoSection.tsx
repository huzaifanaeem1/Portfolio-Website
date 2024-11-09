import React from "react";

const InfoSection = () => {
  return (
    <>
      <section className="text-white bg-stone-950 body-font pt-48 sm:pt-32">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-0 md:ml-12">
            <h1 className="title-font sm:text-7xl text-6xl mb-4 font-black text-white">
              Huzaifa <span className="text-secondary">Naeem</span>
            </h1>
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Aspiring Web <span className="text-secondary">Developer</span> 
            </h2>
            <p className="mb-8 leading-relaxed w-full max-w-xl text-sm sm:text-base md:text-lg">
              I am a Web developer and graphic designer skilled in building web
              applications using modern technologies like React, Next.js, and
              Appwrite. I enjoy learning new tools and applying them to create
              dynamic, user-friendly websites. My design expertise complements
              my development work, allowing me to craft visually appealing and
              intuitive interfaces that enhance the overall user experience.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex text-white font-semibold bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary shadow-secondary ring-2 ring-primary shadow-md rounded text-sm sm:text-lg hover:text-white duration-300">
                  Hire me
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;

