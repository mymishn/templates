import React from "react";
import type { TemplateProps } from "@/types";
import background from "./napkin-back.svg";

export const Napkin: React.FC<TemplateProps> = ({ duration, date, text }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={background}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col justify-between h-full p-10 z-10 font-gloria">
        <p className="text-3xl">{duration}</p>
        <p className="text-3xl leading-normal">{text}</p>
        {date && <p className="text-3xl self-end mb-2">{date}</p>}
      </div>
    </div>
  );
};
