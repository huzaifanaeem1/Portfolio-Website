import React from 'react';

export default function Portfolio() {
  return (
    <div id="Portfolio">
      {/* Portfolio section */}
      <section className="bg-red-800 py-10 pt-28">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 pt-20">Check out my latest coding projects</h2>
          <p className="mb-8 text-white text-sm md:text-base lg:text-lg">
            These are some of the projects I’ve been working on recently. Each project demonstrates my skills in TypeScript and web development. Take a look, and feel free to explore the code on GitHub!
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {/* Project cards */}
            <div className="bg-red-900 p-5 rounded-lg hover:shadow-lg transition duration-300">
              <img
                src="https://img.freepik.com/premium-photo/3d-rendering-illustration-simple-calculator-white-background-calculator-is-orange-has-large-display-keys-are-grey-black_14117-120364.jpg"
                alt="Project 01"
                className="rounded-t-lg w-full object-cover h-40"
              />
              <h3 className="text-lg font-medium text-white mt-4">Project 01: Simple Calculator</h3>
              <a
                href="https://github.com/huzaifanaeem1/my-typescript-simple-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full px-2 py-2 font-semibold text-red-700 hover:underline mt-2 block"
              >
                Read More
              </a>
            </div>
            {/* Repeat the structure for other projects */}
            <div className="bg-red-900 p-5 rounded-lg hover:shadow-lg transition duration-300">
              <img
                src="https://img.freepik.com/premium-photo/photo-modern-atm-machine_1056572-29055.jpg?w=360"
                alt="Project 02"
                className="rounded-t-lg w-full object-cover h-40"
              />
              <h3 className="text-lg font-medium text-white mt-4">Project 02: ATM Machine</h3>
              <a
                href="https://github.com/huzaifanaeem1/simple-typescript-atm-machine.git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full px-2 py-2 font-semibold text-red-700 hover:underline mt-2 block"
              >
                Read More
              </a>
            </div>
            <div className="bg-red-900 p-5 rounded-lg hover:shadow-lg transition duration-300">
        <img src="https://img.freepik.com/premium-photo/adventure-game-background-high-quality_1037171-21319.jpg?w=360" alt="Project 03" className="rounded-t-lg w-full object-cover h-40" />
        <h3 className="text-lg font-medium text-white mt-4">Project 03: Adventure Game</h3>
        <p className="text-white mt-2"></p>
        <a href="https://github.com/huzaifanaeem1/c312-typescript-adventure-game.git" target="_blank" rel="noopener noreferrer" className=" bg-white rounded-full px-2 py-2 font-semibold text-red-700 hover:underline mt-2 block">Read More</a>
      </div>
      <div className="bg-red-900 p-5 rounded-lg hover:shadow-lg transition duration-300">
        <img src="https://play-lh.googleusercontent.com/83t_4CoXFQHlUQA4Hi83Qu3KfISENI9Mw6QVOYRTgn9b9WexgPmOmrtwGjaad844vNE=w600-h300-pc0xffffff-pd" alt="Project 04" className="rounded-t-lg w-full object-cover h-40" />
        <h3 className="text-lg font-medium text-white mt-4">Project 04: Currency Convertor</h3>
        <p className="text-white mt-2"></p>
        <a href="https://github.com/huzaifanaeem1/m3c4-typescript-currency-converter.git" target="_blank" rel="noopener noreferrer" className=" bg-white rounded-full px-2 py-2 font-semibold text-red-700 hover:underline mt-2 block">Read More</a>
      </div>
    
          </div>
        </div>
      </section>

      {/* Another section */}
      <section className="bg-red-900 py-10">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="bg-red-800 p-5 rounded-lg hover:shadow-lg transition duration-300">
              <img
                src="https://img.freepik.com/premium-photo/realty-free-images_1023251-415735.jpg"
                alt="Project 05"
                className="rounded-t-lg w-full object-cover h-40"
              />
              <h3 className="text-lg font-medium text-white mt-4">Project 05: Todo List</h3>
              <a
                href="https://nextjs-todo-list-cyan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full px-2 py-2 font-semibold text-red-700 hover:underline mt-2 block"
              >
                Read More
              </a>
            </div>
            <div className="bg-red-800 p-5 rounded-lg hover:shadow-lg transition duration-300">
        <img src="https://thumbs.dreamstime.com/b/quiz-time-concept-speech-bubble-pencil-yellow-background-quiz-time-concept-speech-bubble-pencil-yellow-background-223092987.jpg" alt="Project 06" className="rounded-t-lg w-full object-cover h-40" />
        <h3 className="text-lg font-medium text-white mt-4">Project 06: Quiz System</h3>
        <p className="text-white mt-2"></p>
        <a href="https://github.com/huzaifanaeem1/typescript-quiz-system.git" target="_blank" rel="noopener noreferrer" className=" bg-white rounded-full px-2 py-2 font-semibold text-red-700 hover:underline mt-2 block">Read More</a>
      </div>
      <div className="bg-red-800 p-5 rounded-lg hover:shadow-lg transition duration-300">
        <img src="https://static.vecteezy.com/system/resources/previews/024/575/589/non_2x/glowing-blue-clock-face-showing-countdown-timer-generated-by-ai-free-photo.jpg" alt="Project 07" className="rounded-t-lg w-full object-cover h-40" />
        <h3 className="text-lg font-medium text-white mt-4">Project 07: CountDownTimer</h3>
        <p className="text-white mt-2"></p>
        <a href="https://countdown-mu-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className=" bg-white rounded-full px-2 py-2 font-semibold text-red-700 hover:underline mt-2 block">Read More</a>
      </div>
      <div className="bg-red-800 p-5 rounded-lg hover:shadow-lg transition duration-300">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/022/006/232/small_2x/travel-abstract-background-with-transport-and-nature-trip-backdrop-generative-ai-photo.jpeg" alt="Simple Website" className="rounded-t-lg w-full object-cover h-40" />
        <h3 className="text-lg font-medium text-white mt-4">World Travel Agency Website</h3>
        <p className="text-white mt-2"></p>
        <a href="https://huzaifanaeem1.github.io/worldtravelwebsite/" target="_blank" rel="noopener noreferrer" className=" bg-white rounded-full px-2 py-2 font-semibold text-red-700 hover:underline mt-2 block">Read More</a>
      </div>
    </div>
        </div>
      </section>

      {/* Features and commands section */}
      <section className="bg-red-800 text-white body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <div className="text-center mb-20">
            <h1 className="sm:text-5xl text-4xl font-bold text-center title-font text-white mb-4">
              Project Features & Commands
            </h1>
            <p className="text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Explore the essential features of each TypeScript project & easily run them using the npx command provided below:
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-red-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-red-800 title-font font-medium">npx my-typescript-simple-calculator</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="text-red-800 title-font font-medium">npx m4c7-simple-typescript-atm-machine</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="text-red-800 title-font font-medium">npx c312-typescript-adventure-game</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="text-red-800 title-font font-medium">npx m3c4-typescript-currency-converter</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="text-red-800 title-font font-medium">npx mc61-simple-todo-list</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-800  w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="text-red-800 title-font font-medium">npx 5q1a-typescript-quiz-system</span>
        </div>
      </div>
    </div>

    <a href="https://github.com/huzaifanaeem1" target="_blank" rel="noopener noreferrer">
    <button className="bg-white flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-red-700 focus:outline-none">
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
    </div>
  );
}
