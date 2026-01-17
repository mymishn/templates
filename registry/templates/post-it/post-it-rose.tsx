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

export const PostItRose: React.FC<TemplateProps> = ({ text, duration, date }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#F894AE]">
      <div className="flex flex-col justify-between h-full p-6 text-black font-gloria">
        <div className="flex flex-col gap-4">
          {date && (
            <p className="text-2xl font-medium">{date}</p>
          )}
          <p className="text-2xl font-medium">{text}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-2xl font-medium">{duration}</p>
        </div>
      </div>
    </div>
  );
};
