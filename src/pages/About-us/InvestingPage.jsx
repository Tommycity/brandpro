import React from "react";

export const InvestingPage = () => {
  return (
    <div className="p-5 md:p-20 lg:p-5 w-full flex flex-col gap-12 bg-[#f5f5f5]">
      <div className="flex flex-col gap-3 items-center mx-auto">
        <h1 className="text-[#282a39] text-[20px] lg:text-[40px] text-center font-bold w-full lg:w-[800px]">
          Investing in us adds to your bottom-line; we will help you grow your
          business
        </h1>
        <p className="text-lg text-center lg:w-[800px]">
          With over 500 clients, 6 workshops, and a team of 400 experienced and
          talented employees; we are a powerful and cohesive unit aiming to
          accelerate your growth and act as your advertising genie.
        </p>
      </div>

      <div className="w-full grid gap-6 lg:gap-0 grid-cols-1 lg:grid-cols-4 px-5 py-16 bg-[#dad6d6] rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center gap-4 col-span-1 w-full">
          <div className="flex justify-center items-center w-[170px] h-[170px] rounded-full border-[1px] border-[#66666647]">
            <div className="flex items-center justify-center w-[130px] h-[130px] rounded-full border-[1px] border-[#da4141] font-bold text-4xl text-black hover:text-white investing-circle hover:border-0">
              500
            </div>
          </div>

          <div className="font-bold text-black text-[15px]">
            Clientele and Still Counting
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 col-span-1 w-full">
          <div className="flex justify-center items-center w-[170px] h-[170px] rounded-full border-[1px] border-[#66666647]">
            <div className="flex items-center justify-center w-[130px] h-[130px] rounded-full border-[1px] border-[#da4141] font-bold text-4xl text-black hover:text-white investing-circle hover:border-0">
              400
            </div>
          </div>

          <div className="font-bold text-black text-[15px]">
            Talented Employees
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 col-span-1 w-full">
          <div className="flex justify-center items-center w-[170px] h-[170px] rounded-full border-[1px] border-[#66666647]">
            <div className="flex items-center justify-center w-[130px] h-[130px] rounded-full border-[1px] border-[#da4141] font-bold text-4xl text-black hover:text-white investing-circle hover:border-0">
              50
            </div>
          </div>

          <div className="font-bold text-black text-[15px] w-50 text-center">
            Fleets with Best in class Logistic Services
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 col-span-1 w-full">
          <div className="flex justify-center items-center w-[170px] h-[170px] rounded-full border-[1px] border-[#66666647]">
            <div className="flex items-center justify-center w-[130px] h-[130px] rounded-full border-[1px] border-[#da4141] font-bold text-4xl text-black hover:text-white investing-circle hover:border-0">
              7
            </div>
          </div>

          <div className="font-bold text-black text-[15px] w-60 text-center">
            Locations served with Single Point Contact
          </div>
        </div>
      </div>
    </div>
  );
};
