import React from "react";
import type { TemplateProps } from "@/types";
import background from "./journal-entry4-back.svg";

export const JournalEntry4: React.FC<TemplateProps> = ({ text, duration, date }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={background}
        alt={text}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col justify-between h-full p-6 z-10 font-gloria">
        <div className="pt-2">
          <p className="text-xl font-medium text-black">{text}</p>
        </div>
        <div className="flex justify-start gap-6 items-start mb-12">
          {date && (
            <p className="text-lg font-medium text-black">{date}</p>
          )}
<p className="text-lg font-medium text-black">{duration}</p>
        </div>
      </div>
    </div>
  );
};
