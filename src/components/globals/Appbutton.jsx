import { Link } from "react-router-dom";

export const Appbutton = ({ title, fontSize, fontWeight, color }) => {
  return (
    <Link
      to="/"
      className=" button-gradient rounded-full py-3 px-7"
      style={{ fontSize: fontSize, fontWeight: fontWeight, color: color }}
    >
      {title}
    </Link>
  );
};
