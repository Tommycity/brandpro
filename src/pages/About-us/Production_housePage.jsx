import React from "react";
import { aboutPageCard, aboutPageCardTwo } from "../../utils/data";

export const Production_housePage = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5 bg-black">
      <div className="flex flex-col gap-3 items-center mx-auto">
        <h1 className="text-[#282a39] text-xl lg:text-[40px] text-center font-bold lg:w-[750px]">
          Journey of a production house to a full-fledged one stop solution for
          GCC
        </h1>
        <p className="text-lg text-center lg:w-[700px]">
          Weaving our way through countless narratives, our story culminates and
          reaches its crescendo, marking a transformative evolution from a mere
          production unit into a comprehensive one-stop solution for GCC. As we
          reflect on our journey, we find ourselves in a relentless pursuit of
          determination.
        </p>
      </div>

      <div className=" relative lg:w-[100%] mx-auto lg:border-2 lg:px-10 py-14 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 justify-between lg:mt-20 border-l-0 lg:border-l-0 rounded-[40px] rounded-tl-none rounded-bl-none">
        {aboutPageCard?.map((item, i) => (
          <div
            key={i}
            className="w-full lg:w-[100%] mx-auto items-center bg-white flex flex-col gap-4  rounded-2xl mt-10 lg:mt-0"
          >
            <img
              src={`/imgs/home/${item?.image}`}
              alt=""
              className=" rounded-t-2xl w-full"
            />
            <div className="px-3 pb-9 flex flex-col gap-2 md:w-full">
              <h1 className="font-bold text-[18px] md:text-2xl lg:text-[18px]">
                {item.title}
              </h1>
              <div
                className={
                  item?.description.length == 1
                    ? "flex md:text-lg lg:text-sm"
                    : "flex flex-col md:text-lg lg:text-sm"
                }
              >
                <div> {item?.description[0]}</div>
                <div> {item?.description[1]}</div>
                <div>{item?.description[2]}</div>
                <div>{item?.description[3]}</div>
              </div>
            </div>
          </div>
        ))}

        {/* the floated item */}
        <div className="hidden lg:block absolute -top-2.5  h-4 w-4 rounded-full button-gradient"></div>

        <div className="absolute flex items-center gap-3 lg:gap-5 left-26 top-6 my-4 lg:my-0 lg:-top-13 md:left-72 lg:left-34 bg-black">
          <img
            src="/imgs/home/footer-logo.png"
            alt=""
            className="h-7 lg:h-10"
          />
          <span className="text-[30px] lg:text-[50px] font-bold text-white">
            2023
          </span>
        </div>
        <div className="absolute top-[38%] left-24 md:left-[40%] md:top-[740px] lg:left-[40%] lg:-top-13 bg-black">
          <span className="text-[30px] lg:text-[50px] font-bold text-[#ee682f]">
            2017-2020
          </span>
        </div>
        <div className="absolute top-[68%] right-35 md:right-[300px] md:top-[1380px] lg:right-40 lg:-top-13 bg-black">
          <span className="text-[35px] lg:text-[50px] font-bold text-[#ee682f]">
            2019
          </span>
        </div>
      </div>

      {/* second card */}
      <div className="relative w-full lg:w-[1300px] mx-auto lg:border-2 lg:px-10 lg:py-14 grid grid-cols-1 lg:grid-cols-3 gap-14 justify-between lg:border-t-0 lg:border-r-0 lg:border-b-0">
        {aboutPageCardTwo?.map((item, i) => (
          <div
            key={i}
            className="w-full lg:w-[100%] mx-auto items-center bg-white flex flex-col gap-4  rounded-2xl"
          >
            <img
              src={`/imgs/home/${item?.image}`}
              alt=""
              className="w-full rounded-t-2xl"
            />
            <div className="px-3 pb-9 flex flex-col gap-2 md:w-full">
              <h1 className="font-bold text-[18px] md:text-2xl lg:text-[18px]">
                {item.title}
              </h1>
              <div
                className={
                  item?.description.length == 1
                    ? "flex md:text-lg lg:text-sm"
                    : "flex flex-col md:text-lg lg:text-sm"
                }
              >
                <div> {item?.description[0]}</div>
                <div> {item?.description[1]}</div>
                <div>{item?.description[2]}</div>
                <div>{item?.description[3]}</div>
              </div>
            </div>
          </div>
        ))}

        {/* the floated item */}
        <div className="hidden lg:block absolute -left-2 -top-2.5  h-4 w-4 rounded-full button-gradient"></div>

        <div className="absolute left-25 -top-12 md:-top-12 md:left-60 lg:left-24  lg:-top-10 bg-black">
          <span className="text-[30px] lg:text-[50px] font-bold text-[#ee682f]">
            2008-2012
          </span>
        </div>
        <div className="absolute top-[29%] left-25 mx-auto md:left-[36%] md:top-[580px] lg:left-[40%] lg:-top-10 bg-black">
          <span className="text-[30px] lg:text-[50px] font-bold text-[#ee682f]">
            2013-2014
          </span>
        </div>
        <div className="absolute top-[66%] right-28 md:right-72 md:top-[1230px] lg:right-24 lg:-top-10 bg-black">
          <span className="text-[30px] lg:text-[50px] font-bold text-[#ee682f]">
            2015-2016
          </span>
        </div>
      </div>
    </div>
  );
};
