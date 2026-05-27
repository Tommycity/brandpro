import { motto } from "../../utils/data";
import { ArrowButton } from "../../components/globals/ArrowButton";

export const ArtOfImpactingpage = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 px-6 lg:p-8 lg:my-16 pb-7">
      <h1 className="text-black text-3xl md:text-5xl lg:text-5xl font-medium">
        We Don’t Just Build Booths.
      </h1>

      <p className="text-[16px] md:text-[17px] xl:text-[22px]">
        We Create Exhibition Experiences That Make Brands Impossible to Ignore.
      </p>

      <p className="text-[16px] md:text-[17px] xl:text-[22px] text-justify">
        At Brandpro Exhibition Event Company Limited, we help businesses stand
        out at trade shows, exhibitions, conferences, and corporate events
        through professional Shell Scheme Booths, custom exhibition stands,
        event branding, and experiential setup solutions. From standard booth
        systems to fully customized exhibition environments, we deliver clean
        execution, strong visual impact, and reliable project delivery that
        gives exhibitors confidence and organizers peace of mind. Whether you’re
        planning a trade fair, industry expo, corporate showcase, or conference,
        Brandpro is your trusted exhibition execution partner.
      </p>

      <p className="text-[16px] md:text-[17px] xl:text-[22px]">
        Explore our projects. See what we’ve built. Imagine what we can create
        for your next event.
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
            src="/imgs/new-images/BP-team.jpg"
            alt=""
            className="w-full h-full rounded-3xl transition-transform duration-500 hover:scale-110 object-cover"
          />
        </div>

        <div className="w-full lg:w-[65%] h-[370px] rounded-3xl overflow-hidden">
          <img
            src="/imgs/new-images/booth-01.jpg"
            alt=""
            className="w-full h-full rounded-3xl transition-transform duration-500 hover:scale-110 object-cover"
          />
        </div>

        <div className="absolute top-[320px] lg:top-[140px] lg:left-[465px] xl:left-[600px] flex items-center justify-center">
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
