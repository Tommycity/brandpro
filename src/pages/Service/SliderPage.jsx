import { useState, useEffect } from "react";
import { sliderImage } from "../../utils/data";

export const SliderPage = () => {
  return (
    <div className="w-full flex gap-2 items-center overflow-hidden">
      {sliderImage?.map((item, i) => (
        <div key={i} className="border-2 h-[300px] w-[300px]">
          <img src={`/imgs/new-images/${item?.image}`} alt="" className="w-full h-full object-cover"/>
        </div>
      ))}
    </div>
  );
};
