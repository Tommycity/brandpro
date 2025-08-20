import React from "react";

export const Facilities = () => {
  return (
    <div className=" w-full h-full lg:h-[400px] flex flex-col lg:flex-row">
      <div className="py-20 px-5 md:p-20 lg:p-5 w-full lg:w-[50%] flex flex-col justify-center gap-4 items-center lg:items-start lg:pl-30">
        <span className="text-black font-bold text-2xl lg:text-4xl">
          Our facilities
        </span>
        <span className="text-lg lg:text-[18px] text-center lg:text-left">
          We are equipped with latest technology tools for gorgeous results, be
          it handheld smart measuring devices or heavy machineries
        </span>
      </div>
      <div className="py-20 px-5 md:p-20 lg:p-5 w-full lg:w-[50%] flex flex-col  justify-center items-center text-white gap-3 bg-[#ef7f49]">
        <span className="text-2xl lg:text-4xl font-bold text-center lg:text-left">
          Reveal the Power of Your Brand
        </span>
        <span className="text-xl md:text-sm">TSS ADVERTISING</span>
      </div>
    </div>
  );
};
