import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

export const AboutUs_Hero_Btn = ({ title }) => {
  return (
    <Link
      to="/"
      className=" button-gradient flex items-center gap-2 text-white rounded-full py-3 px-7"
    >
      <MdOutlineContactPage />
      {title}
    </Link>
  );
};
