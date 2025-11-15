import React from "react";
import type { TemplateProps } from "@/types";

export const TimelineBlackBruno: React.FC<TemplateProps> = ({ title, times = [] }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full p-6">
        <p className="text-2xl font-regular text-black font-bruno mb-2">{title}</p>
        <div className="w-20 h-8 border-t-2 border-l-2 border-r-2 border-black mb-0"></div>
        <div className="w-full h-0.5 bg-black mb-2"></div>
        <div className="flex justify-between items-center w-full">
          <p className="text-sm font-regular text-black font-inter">{times[0]}</p>
          <p className="text-sm font-regular text-black font-inter">{times[1]}</p>
          <p className="text-sm font-regular text-black font-inter">{times[2]}</p>
        </div>
      </div>
    </div>
  );
};

