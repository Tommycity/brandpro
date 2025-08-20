import { useState, useEffect } from "react";
import { sliderImage } from "../../utils/data";

export const SliderPage = () => {
  return (
    <div className="w-full flex gap-2 items-center overflow-hidden">
      {sliderImage?.map((item, i) => (
        <div key={i} className="border-2">
          <img src={`/imgs/home/${item?.image}`} alt="" />
        </div>
      ))}
    </div>
  );
};
