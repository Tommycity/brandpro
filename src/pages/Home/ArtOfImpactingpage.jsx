import { motto } from "../../utils/data";
import { ArrowButton } from "../../components/globals/ArrowButton";

export const ArtOfImpactingpage = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 px-6 lg:p-8 lg:my-16 pb-7">
      <h1 className="text-black text-3xl md:text-5xl lg:text-5xl font-medium">
        The Art Of Impacting
      </h1>

      <p className="text-[16px] md:text-[17px]">
        TSS Advertising Company has its roots all over the GCC and has grown to
        dominance over the years. We are a premier partner for events,
        exhibitions, promotions, company branding, and more advertising
        services, with a vision to be a global leader in the businesses we
        operate.
      </p>

      <p className="text-[16px] md:text-[17px]">
        We tend to the marketing/advertising needs of the region through our
        eager teams finding their thrill in innovating ways to deliver your
        message across; whether it be on the slightest tip of a pen or
        full-fledged events & exhibition stands, we do it all. <br />
        Exhibition stand builders and contractors in Saudi Arabia, Dubai, Egypt,
        Oman, and Bahrain.
      </p>

      <div className="flex flex-col lg:flex-row  lg:justify-between md:items-center">
        <div className="flex flex-col md:flex-row  lg:flex-row  lg:items-center gap-4 md:gap-14  lg:gap-18 my-6">
          {motto?.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <img src={`/imgs/home/${item?.icon}`} alt="" />
              <span className="text-black uppercase font-medium text-[18px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <ArrowButton title="FIND OUT MORE" />
      </div>

      {/* the ripple effect part */}
      <div className="relative w-full flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-[35%] h-[370px] rounded-3xl overflow-hidden">
          <img
            src="/imgs/home/HOME--MDL-about_image.webp"
            alt=""
            className="w-full h-full rounded-3xl transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="w-full lg:w-[65%] h-[370px] rounded-3xl overflow-hidden">
          <img
            src="/imgs/home/HOME-F1-about_image_two.webp"
            alt=""
            className="w-full h-full rounded-3xl transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="absolute top-[320px] lg:top-[140px] lg:left-[465px] flex items-center justify-center">
          <span className="absolute w-24 h-24 rounded-s-2xl rounded-tr-2xl bg-white opacity-30 animate-ripple"></span>
          <img
            src="/imgs/home/play-circle.svg"
            alt=""
            className=" bg-white p-3 rounded-s-2xl rounded-tr-2xl z-10"
          />
        </div>
      </div>
    </div>
  );
};
