import { Link } from "react-router-dom";

export const AppBtnWhiteBg = ({
  title,
  backgroundColor,
  color,
  fontweight,
}) => {
  return (
    <Link
      to="/"
      className="bg-white w-fit text-black app-btn-white-bg hover:text-white rounded-full py-3 px-7"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        fontWeight: fontweight,
      }}
    >
      {title}
    </Link>
  );
};
