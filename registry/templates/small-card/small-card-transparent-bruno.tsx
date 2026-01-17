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

export const SmallCardTransparentBruno: React.FC<TemplateProps> = ({ title, duration }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white/5 rounded-3xl">
      <div className="absolute bottom-[2.5%] left-[2.5%] w-[95%] h-[75%] bg-black rounded-3xl" />
      <div className="relative flex flex-col h-full font-bruno z-10">
        <div className="flex items-center justify-center flex-[0_0_22.5%] px-6">
          <p className="text-3xl font-medium text-white text-center">{title}</p>
        </div>
        <div className="flex flex-col justify-end px-6 py-8 text-white flex-1 min-h-0">
          <p className="text-lg font-medium mb-1 text-[#8A8A8A]">worked</p>
          <p className="text-6xl">{duration}</p>
        </div>
      </div>
    </div>
  );
};

