import { Link } from "react-router-dom";

export const Appbuttontransparent = ({ title }) => {
  return (
    <Link
      to="/"
      className="relative overflow-hidden text-white border-2 border-white rounded-full py-3 px-7 transition-colors duration-300 group"
    >
      <span
        className="absolute left-0 top-0 h-full w-0 bg-white z-0 transition-all duration-800 group-hover:w-full rounded-full"
        aria-hidden="true"
      ></span>
      <span className="relative z-10  duration-300 group-hover:text-black">
        {title}
      </span>
    </Link>
  );
};
