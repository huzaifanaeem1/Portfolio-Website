import Link from "next/link";
import React from "react";
import Image from "next/image";
import images from "@/public/images/me.jpeg";

const Navbar = () => {
  return (
    <header className="bg-white text-red-800 fixed w-full z-20">
      <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
        <div className="flex items-center">
          <Image
            src={images}
            alt="Profile Picture"
            className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
          />
          <a className="text-red-700 font-semibold ml-3 text-lg sm:text-xl">
            Huzaifa Naeem
          </a>
        </div>

        <nav className="mt-4 md:mt-0 flex flex-wrap items-center justify-center space-x-4 md:space-x-6">
          <Link
            href="/"
            className="font-semibold hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-3 py-2 text-sm sm:text-base duration-200"
          >
            Home
          </Link>
          <Link
            href="#Education"
            className="font-semibold hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-3 py-2 text-sm sm:text-base duration-200"
          >
            Education
          </Link>
          <Link
            href="#Skill"
            className="font-semibold hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-3 py-2 text-sm sm:text-base duration-200"
          >
            Skills
          </Link>
          <Link
            href="#Portfolio"
            className="font-semibold hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-3 py-2 text-sm sm:text-base duration-200"
          >
            Portfolio
          </Link>
          <Link
            href="#Contact"
            className="font-semibold hover:shadow-md hover:bg-red-900 rounded-xl hover:text-white px-3 py-2 text-sm sm:text-base duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
