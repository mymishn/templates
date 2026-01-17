import React from "react";
type TemplateProps = {
  title?: string;
  duration: string;
  background?: string;
  date?: string;
  hours?: string;
  text?: string;
  tasks?: string[];
  days?: string[];
  dayDurations?: string[];
  times?: string[];
};
import background from "./journal-entry3-back.svg";

export const JournalEntry3: React.FC<TemplateProps> = ({ text, duration, date }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <img
        src={background}
        alt={text || "Journal Entry"}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative flex flex-col justify-between h-full p-6 z-10 font-gloria">
      
          <p className="text-xl font-medium text-black">{text}</p>
    
        <div className="flex justify-end gap-6 items-end mb-2">
          {date && (
            <p className="text-lg font-medium text-black">{date}</p>
          )}
          <p className="text-lg font-medium text-black">{duration}</p>
        </div>
      </div>
    </div>
  );
};
