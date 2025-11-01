import React from "react";
import type { TemplateProps } from "@/types";
import background from "./background.png";

export const NightWork: React.FC<TemplateProps> = ({ title, duration, date }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <img
        src={background}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-6 left-6 z-10 text-white">
        {date && <p className="text-xs opacity-70 mb-1">{date}</p>}
        <p className="text-lg font-medium">{title}</p>
        <p className="text-3xl font-bold mt-1">{duration}</p>
      </div>
    </div>
  );
};
