import React from "react";
import type { TemplateProps } from "../types";
import background from "./journal-entry1-back.svg";

export const JournalEntry1: React.FC<TemplateProps> = ({ text, duration, date }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <img
        src={background}
        alt={text}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative flex flex-col justify-between h-full p-7 z-10 text-black font-gloria">
        <div className="pt-6">
          <p className="text-xl font-medium">{text}</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-lg font-medium">{duration}</p>
          {date && (
            <p className="text-lg font-medium">{date}</p>
          )}
        </div>
      </div>
    </div>
  );
};
