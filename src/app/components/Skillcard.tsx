import React from "react";
import { IconType } from "react-icons";

const SkillCard = ({
  skill,
  icon: Icon,
  size = 30,
}: {
  skill: string;
  icon: IconType;
  size?:  number;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-32 h-32 bg-white border-2 border-red-800 px-4 py-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
      <Icon size={size} className="text-red-800" />
      <span className="mt-2 text-lg text-black">{skill}</span>
    </div>
  );
};

export default SkillCard;

