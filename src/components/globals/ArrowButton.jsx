import {
  MdOutlineKeyboardArrowRight,
  MdOutlineArrowForward,
} from "react-icons/md";
import { Link } from "react-router-dom";

export const ArrowButton = ({ title, color }) => {
  return (
    <Link to="/" className="relative flex items-center group cursor-pointer">
      <div className="flex items-center rounded-full overflow-hidden px-3 py-2 gap-4">
        <span className="rounded-full border-r-[50%] text-2xl flex items-center z-10 text-white">
          <span className="block group-hover:hidden">
            <MdOutlineKeyboardArrowRight />
          </span>
          <span className="hidden group-hover:block">
            <MdOutlineArrowForward />
          </span>
        </span>
        <span
          style={{ color: color }}
          className="font-medium md:text-[16px] z-10 px-2 transition-colors duration-500 group-hover:text-white"
        >
          {title}
        </span>
        <span className="absolute left-0 top-0 h-full w-[49px] group-hover:w-full button-gradient rounded-full transition-all duration-500 z-0"></span>
      </div>
    </Link>
  );
};
