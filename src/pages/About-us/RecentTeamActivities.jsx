import React from "react";
import { aboutPageTeamSection } from "../../utils/data";

export const RecentTeamActivities = () => {
  return (
    <div className="container flex flex-col w-full">
      <h1 className="font-bold text-5xl mb-10">Recent Team Activities</h1>

      <div className="w-full lg:h-[500px] flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full md:w-full lg:w-[33%] h-full flex flex-col gap-4">
          <div className="h-[50%] overflow-hidden group rounded-lg">
            <img
              src="/imgs/home/HOME--MDL-about_image.webp"
              alt=""
              className="h-full w-full group-hover:scale-110 transition-transform ease-in-out duration-500"
            />
          </div>
          <div className="h-[50%] overflow-hidden group rounded-lg">
            <img
              src="/imgs/home/HOME-F1-about_image_two.webp"
              alt=""
              className="h-full w-full hoveringEffect"
            />
          </div>
        </div>

        {/* Middle */}
        <div className="w-full md:w-full lg:w-[33%] h-full group overflow-hidden rounded-lg">
          <img
            src="/imgs/home/ChiefFinancialOfficer.webp"
            alt=""
            className="h-full hoveringEffect w-full"
          />
        </div>

        <div className="lg:w-[33%] h-full flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-3 h-[50%] w-full">
            <div className="h-full lg:w-[50%] overflow-hidden group rounded-lg">
              <img
                src="/imgs/home/HOME--MDL-about_image.webp"
                alt=""
                className="h-full w-full group-hover:scale-110 transition-transform ease-in-out duration-500"
              />
            </div>
            <div className="h-full lg:w-[50%] overflow-hidden group rounded-lg">
              <img
                src="/imgs/home/HOME--MDL-about_image.webp"
                alt=""
                className="h-full w-full group-hover:scale-110 transition-transform ease-in-out duration-500"
              />
            </div>
          </div>

          <div className="h-full lg:h-[50%] overflow-hidden group rounded-lg">
            <img
              src="/imgs/home/HOME-F1-about_image_two.webp"
              alt=""
              className="h-full w-full hoveringEffect"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
