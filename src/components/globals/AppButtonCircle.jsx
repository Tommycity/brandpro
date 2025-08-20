import { Link } from "react-router-dom";

export const AppButtonCircle = ({ title }) => {
  return (
    <Link
      to="/"
      className=" button-gradient rounded-full border-r-[50%] py-3 px-4"
    >
      {title}
    </Link>
  );
};
