import React from "react";

export const Vision_Mission_Page = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5">
      <div className="w-full lg:w-[1100px] mx-auto flex flex-col gap-5">
        <div className="relative about-us-vision-image flex flex-col lg:flex-row items-center gap-3 w-full h-[220px] text-white p-4 lg:px-20 rounded-xl">
          <span className="font-bold text-[30px] lg:text-[45px] w-full lg:w-[40%] z-10">
            OUR VISION
          </span>
          <span className="text-[16px] md:text-[18px] lg:text-lg w-full lg:w-[65%] z-10">
            To be a leader globally in the businesses we operate by empowering
            our customers and enriching the lives of people.
          </span>

          <div className="absolute top-0 left-0 bg-black/70 w-full h-full rounded-xl"></div>
        </div>
        <div className="relative about-us-mision-image flex flex-col lg:flex-row items-center md:items-start lg:items-center gap-3 w-full h-[220px] text-white p-4 lg:px-20 rounded-xl">
          <span className="font-bold text-[30px] w-full lg:text-[45px] lg:w-[40%] z-10">
            OUR MISION
          </span>
          <span className="text-lg lg:w-[65%] z-10 md:text-[18px]">
            Providing solutions to empower and enrich people and organizations
          </span>
          <div className="absolute top-0 left-0 bg-black/70 w-full h-full rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};
