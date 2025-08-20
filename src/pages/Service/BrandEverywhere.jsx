import React from "react";
import { brandEverywhereData } from "../../utils/data";
import { AppBtnWhiteBg } from "../../components/globals/AppBtnWhiteBg";

export const BrandEverywhere = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5 bg-black flex flex-col gap-14">
      <div className="text-center flex flex-col gap-6">
        <h1 className="text-[#282a39] text-3xl lg:text-5xl font-bold">
          We take your brand everywhere
        </h1>
        <p className="text-lg">
          Equipped with latest industry technologies, utilized by the brightest
          of minds; here's a list of our most prominent services.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
        {brandEverywhereData?.map((item, i) => (
          <div key={i} className="flex w-full flex-col gap-3">
            <div className="group overflow-hidden lg:h-[400px]">
              <img
                src={`/imgs/home/${item.image}`}
                alt=""
                className="group-hover:scale-110 transition-transform ease-in-out duration-500 h-full  w-full"
              />
            </div>
            <span className="font-bold text-xl">{item.title}</span>
            <AppBtnWhiteBg title="Explore services" />
          </div>
        ))}
      </div>
    </div>
  );
};
