import React from 'react'

export default function Contact() {
  return (
    <div id='Contact'>
      <section className="text-white bg-red-800 body-font pt-20">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-black title-font mb-4 text-white tracking-widest uppercase">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">For any queries or collaboration opportunities, feel free to reach out through the contact information provided below.</p>
    </div>
  </div>



<section className="container px-2 py-2 mx-auto text-wh body-font relative">
  <div className="absolute inset-0 bg-red-300 mb-20">
    <iframe width="100%" height="100%"  title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7242.04224640241!2d67.14316896986068!3d24.828951234114328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bacbafe3565%3A0xd980e3f31212e71e!2sSector%2033%20C%20Korangi%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727703530520!5m2!1sen!2s"></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-red-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p className="leading-relaxed mb-5 text-black">Please fill this form if you have any queries or if you have any message for us.</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-red-300 focus:border-red-900 focus:ring-2 focus:ring-red-700 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-black">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-red-300 focus:border-red-900 focus:ring-2 focus:ring-red-700 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg">Submit</button>
      <p className="text-xs text-red-500 mt-3">Please our privacy policy for any issues.</p>
    </div>
  </div>
</section>
</section>
    </div>
  )
}
