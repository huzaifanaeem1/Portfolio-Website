import { FC } from 'react';
import { FiPenTool } from 'react-icons/fi';
import { LuFolderCog } from "react-icons/lu";
import { GiLaptop} from 'react-icons/gi';

const Service: FC = () => {
  return (
    <div
    
      className="bg-stone-950 text-white p-12 bg-cover bg-center pt-36 pb-24"
      // style={{ backgroundImage: 'url("/images/newbg.jpg")' }} 
    >
      {/* Hero Section */}
      <div className="animate-slide-left">
      <section className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-white mb-4 pt-8">My <span className='text-secondary'> Services</span> </h1>
        <p className="text-xl text-white pt-8 pb-8">We specialize in offering solutions designed to meet your goals.</p>
      </section>

      {/* Services List */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* Web Development */}
        <div className="bg-secondary p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 hover:bg-primary hover:shadow-2xl hover:cursor-pointer group relative">
          <div className="bg-primary p-6 rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2 group-hover:bg-secondary transition-colors">
            <GiLaptop className="text-5xl text-white" />
          </div>
          <h2 className="text-2xl font-semibold mt-16 text-white group-hover:text-white transition-colors">Web Development</h2>
          <p className="text-white mt-4">We build high-performance websites with modern designs that offer seamless user experiences across all devices.</p>
        </div>

        {/* Graphic Design */}
        <div className="bg-primary p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 hover:bg-secondary  hover:shadow-2xl hover:cursor-pointer group relative">
          <div className="bg-secondary  p-6 rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2 group-hover:bg-primary transition-colors">
            <FiPenTool  className="text-5xl text-white" />
          </div>
          <h2 className="text-2xl font-semibold mt-16 text-white group-hover:text-white transition-colors">Graphic Design</h2>
          <p className="text-white mt-4">We create visually striking graphics that capture your brand’s essence and leave a lasting impression on your audience.</p>
        </div>

        {/* UI/UX Design */}
        <div className="bg-secondary p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 hover:bg-primary  hover:shadow-2xl hover:cursor-pointer group relative">
          <div className="bg-primary p-6 rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2 group-hover:bg-secondary transition-colors">
            <LuFolderCog className="text-5xl text-white" />
          </div>
          <h2 className="text-2xl font-semibold mt-16 text-white group-hover:text-white transition-colors">UI/UX Design</h2>
          <p className="text-white mt-4">We design user-friendly interfaces that ensure smooth navigation and a delightful experience, keeping your users engaged and satisfied.</p>
        </div>
      </section>
      </div>
    </div>
   
  );
};

export default Service;