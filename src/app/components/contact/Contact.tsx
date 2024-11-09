import React from 'react';

export default function Contact() {
  return (
    <div id='Contact'>
      <section className="text-white bg-stone-950 body-font pt-12">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-6xl sm:text-7xl font-black title-font mb-4 text-white pt-16">
            Contact <span className='text-secondary'>Us</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base pt-8">
              For any queries or collaboration opportunities, feel free to reach out through the contact information provided below.
            </p>
          </div>
        </div>

        <section className="container px-2 sm:px-6 py-6 mx-auto relative">
          <div className="absolute inset-0 bg-primary mb-20 h-96 sm:h-auto">
            <iframe
              width="100%"
              height="100%"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.428962714777!2d67.1191173841228!3d24.91989720631561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e531744437%3A0xc146fcc5aa4768fd!2sBlock%2014%20Gulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731156674374!5m2!1sen!2s"
            ></iframe>
          </div>
          <div className="relative container px-5 py-24 mx-auto flex flex-col md:flex-row justify-center items-center">
            <div className="lg:w-1/3 md:w-1/2 bg-stone-950 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-white text-lg mb-1 font-bold title-font">
                Contact <span className='text-secondary'>Us</span>
              </h2>
              <p className="leading-relaxed font-normal mb-5 text-white">
                Please fill this form if you have any queries or a message for us.
              </p>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-stone-950 rounded border border-primary focus:border-secondary focus:ring-2 focus:ring-primary text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-stone-950 rounded border border-primary focus:border-secondary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:secondary rounded text-lg">
                Submit
              </button>
              <p className="text-sm text-white mt-3">
                Please check our privacy policy for any issues.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
