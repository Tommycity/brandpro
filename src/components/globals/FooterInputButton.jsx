import { PiRocketLaunchThin } from "react-icons/pi";

export const FooterInputButton = ({ placeholder }) => {
  return (
    <div className="bg-[#212323] w-[300px] md:w-[400px] lg:w-[400px] h-11 flex items-center rounded-tl-md rounded-bl-md">
      <input
        type="text"
        placeholder={placeholder}
        name="input"
        className="w-[80%] lg:w-[90%] px-5 text-[15px] outline-none focus:outline-none placeholder-stone-500"
      />
      <div className="button-gradient w-[20%] lg:w-[10%] h-full flex items-center justify-center">
        <PiRocketLaunchThin className="text-white text-xl" />
      </div>
    </div>
  );
};
