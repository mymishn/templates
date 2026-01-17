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

export const GitCommitPurple: React.FC<TemplateProps> = ({ tasks = [] }) => {
  const truncateText = (text: string, maxLength: number = 20) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="relative inline-block overflow-visible rounded-3xl p-10 font-noto text-white">
      <div className="relative flex flex-col items-start">
        <span className="absolute left-[0.53125rem] top-0 bottom-0 w-[0.1875rem] bg-[#AB75F7]" />
        {tasks.map((todo, index) => (
          <div
            key={`${todo}-${index}`}
            className={`relative flex items-center ${index === 0 ? "pt-6" : ""} ${index !== tasks.length - 1 ? "pb-6" : "pb-6"}`}
          >
            <div className="relative flex-shrink-0 mr-6 flex items-center justify-center z-10">
              <span className="w-5 h-5 rounded-full bg-[#AB75F7]" />
            </div>
            <p className="text-2xl leading-tight whitespace-nowrap">{truncateText(todo)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

