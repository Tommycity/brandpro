import { MdOutlineForwardToInbox } from "react-icons/md";
import { Link } from "react-router-dom";

export const AppNotificationButton = () => {
  return (
    <Link className="absolute button-gradient rounded-full border-r-[50%] py-3 px-4">
      <MdOutlineForwardToInbox />
    </Link>
  );
};
