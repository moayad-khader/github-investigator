import React from "react";

const Skeleton:React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 pt-16 w-full">
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
      <div className="animate-pulse min-h-[170px] p-5 rounded-lg bg-white/10 text-white "></div>
    
    </div>
  );
};

export default Skeleton;