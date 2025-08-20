import { Link } from "react-router-dom";
import { ArrowButton } from "../../components/globals/ArrowButton";
import { bouquetOfService } from "../../utils/data";

export const BouquetPage = () => {
  return (
    <div className="bouquet-image w-full flex flex-col lg:gap-3 px-5 lg:px-8 py-10 lg:py-16">
      <div className="flex gap-2 md:gap-4 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-medium">
          Our Bouquet of Services
        </h1>
        <ArrowButton title="VIEW ALL SERVICES" color="white" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 md:w-full lg:grid-cols-3 w-full lg:gap-10">
        {bouquetOfService?.map((item, i) => (
          <Link
            to={item?.url}
            key={i}
            className="relative overflow-hidden  mt-6 lg:mt-12"
          >
            <img
              src={`/imgs/home/${item?.image}`}
              alt=""
              className="hover:scale-110 transition-transform duration-700 md:w-full"
            />

            <h3 className="absolute text-center  lg:text-center bottom-4 font-medium text-[16px] md:text-2xl lg:text-xl w-full text-white uppercase">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
