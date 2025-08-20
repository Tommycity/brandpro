export const ContactInputBtn = ({ placeholder }) => {
  return (
    <div className="bg-[#343434] w-full md:w-[400px] lg:w-full h-11 flex items-center rounded-md">
      <input
        type="text"
        placeholder={placeholder}
        name="input"
        className="w-[80%] lg:w-[90%] px-5 text-[15px] outline-none focus:outline-none placeholder-white"
      />
    </div>
  );
};
