import Link from "next/link";
import React from "react";
import Image from "next/image";
import images from "@/public/images/me.jpeg"
const Navbar = () => {
  return (
    <header className=" text-red-800 bg-white body-font fixed w-full z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
      <Image
  src={images}
  alt="Profile Picture"
  className="rounded-[50%] w-16 h-16 "
/>

        <a className="flex title-font font-semibold items-center text-red-700 mb-4 md:mb-0 pl-3">
          Huzaifa Naeem
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            className="mr-5 hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Home
          </Link>
          <Link
            href="#Education"
            className="mr-5 hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Education
          </Link>
          <Link
            href="#Skill"
            className="mr-5 hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Skills
          </Link>
          <Link
            href="#Portfolio"
            className="mr-5 hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Portfolio
          </Link>
          <Link
            href="#Contact"
            className="mr-5 hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;