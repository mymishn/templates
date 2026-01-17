import React from "react";
import type { TemplateProps } from "../types";

export const TitleNotesWhite: React.FC<TemplateProps> = ({ title, duration, date, hours, text }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white/30 rounded-xl">
      <div className="flex flex-col justify-between h-full p-6 z-10 text-black font-gloria">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start">
            {date && (
              <p className="text-lg font-medium">{date}</p>
            )}
            {hours && (
              <p className="text-lg font-medium">{hours}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-2xl font-medium">{title}</p>
            {text && (
              <p className="text-lg font-medium">{text}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <p className="text-lg font-medium">{duration}</p>
        </div>
      </div>
    </div>
  );
};
