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
              src="/imgs/new-images/booth-10.jpg"
              alt=""
              className="h-full w-full group-hover:scale-110 transition-transform ease-in-out duration-500 object-cover"
            />
          </div>
          <div className="h-[50%] overflow-hidden group rounded-lg">
            <img
              src="/imgs/new-images/booth-09.jpg"
              alt=""
              className="h-full w-full hoveringEffect object-cover"
            />
          </div>
        </div>

        {/* Middle */}
        <div className="w-full md:w-full lg:w-[33%] h-full group overflow-hidden rounded-lg">
          <img
            src="/imgs/new-images/BP-team.jpg"
            alt=""
            className="h-full hoveringEffect w-full cover"
          />
        </div>

        <div className="lg:w-[33%] h-full flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-3 h-[50%] w-full">
            <div className="h-full lg:w-[50%] overflow-hidden group rounded-lg">
              <img
                src="/imgs/new-images/booth-07.jpg"
                alt=""
                className="h-full w-full group-hover:scale-110 transition-transform ease-in-out duration-500"
              />
            </div>
            <div className="h-full lg:w-[50%] overflow-hidden group rounded-lg">
              <img
                src="/imgs/new-images/booth-06.jpg"
                alt=""
                className="h-full w-full group-hover:scale-110 transition-transform ease-in-out duration-500"
              />
            </div>
          </div>

          <div className="h-full lg:h-[50%] overflow-hidden group rounded-lg">
            <img
              src="/imgs/new-images/booth-05.jpg"
              alt=""
              className="h-full w-full hoveringEffect object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
