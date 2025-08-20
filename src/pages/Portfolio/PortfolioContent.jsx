import { Link } from "react-router-dom";
import { portfoliaCardData, portfolioBtnData } from "../../utils/data";

export const PortfolioContent = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5 flex flex-col gap-10 items-center">
      <span className="text-lg lg:text-xl text-center lg:text-left">
        Display Stand Manufacturers in Saudi Arabia, Riyadh, Jeddah, Dubai,
        Egypt, Oman, Bahrain
      </span>

      <div className="w-full grid items-center justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {portfolioBtnData?.map((item, i) => (
          <Link
            key={i}
            to="/"
            className="flex items-center justify-center text-[13px] font-semibold px-4 py-2 border-[1px] border-stone-300 hover:text-white hover:border-0 app-btn-white-bg rounded-full"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-7">
        {portfoliaCardData?.map((item, i) => (
          <div key={i} className="w-full flex flex-col gap-4">
            <div className="overflow-hidden group rounded-2xl">
              <img
                src={`/imgs/home/${item?.image}`}
                alt=""
                className="group-hover:scale-110 transition-transform ease-in-out duration-500 w-full"
              />
            </div>
            <h1 className="text-black text-[20px] font-bold">{item?.title}</h1>
            <span className="text-[16px]">{item?.subtile}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
