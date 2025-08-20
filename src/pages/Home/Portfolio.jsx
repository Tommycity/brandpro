import { ArrowButton } from "../../components/globals/ArrowButton";
import "../../../public/styles/marquee.css";
import { images } from "../../utils/data";

export const Portfolio = () => {
  return (
    <div className="flex flex-col py-16">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-5 lg:px-8 text-black mb-8">
        <h1 className="text-5xl lg:text-6xl font-medium">Portfolio</h1>
        <ArrowButton title="VIEW ALL SERVICES" />
      </div>

      <div className="marquee-container w-full h-[200px] lg:h-[350px]  mb-8">
        <div className="marquee-track-to-left h-full">
          {images?.map((item, i) => (
            <img
              key={i}
              src={`imgs/home/${images?.[i]}`}
              alt="marquee-img"
              className="marquee-img"
            />
          ))}
        </div>
      </div>

      <div className="marquee-container lg:h-[350px] h-[200px]">
        <div className="marquee-track-to-right h-full">
          {images?.map((item, i) => (
            <img
              key={i}
              src={`/imgs/home/${images?.[i]}`}
              alt="marquee-img"
              className="marquee-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
