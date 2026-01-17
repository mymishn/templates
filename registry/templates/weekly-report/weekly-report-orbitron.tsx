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

export const WeeklyReportOrbitron: React.FC<TemplateProps> = ({ duration, days = [], dayDurations = [] }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full p-6 font-orbitron text-white gap-10">
        <div className="flex justify-between items-center w-full">
          <p className="text-4xl font-semibold">this week</p>
          <p className="text-4xl font-semibold">{duration}</p>
        </div>
        <div className="grid grid-cols-4 gap-6 w-full mt-14">
          {days.slice(0, 4).map((day, index) => (
            <div key={day} className="flex flex-col items-center gap-1 p-6">
              <p className="text-base font-semibold">{day}</p>
              <p className="text-4xl font-semibold">{dayDurations[index] || "0h"}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 mx-auto">
          {days.slice(4, 7).map((day, index) => (
            <div key={day} className="flex flex-col items-center gap-1 p-6">
              <p className="text-base font-semibold">{day}</p>
              <p className="text-4xl font-semibold">{dayDurations[index + 4] || "0h"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

