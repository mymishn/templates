import React from "react";
import type { TemplateProps } from "../types";
import background from "./journal-entry2-back.svg";

export const JournalEntry2: React.FC<TemplateProps> = ({ text, duration, date }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <img
        src={background}
        alt={text}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative flex flex-col h-full p-5 z-10 text-black font-gloria">
        <div className="flex justify-between items-start mb-4 mt-8">
          {date && (
            <p className="text-lg font-medium">{date}</p>
          )}
          <p className="text-lg font-medium">{duration}</p>
        </div>
          <p className="text-xl font-medium">{text}</p>
      </div>
    </div>
  );
};
