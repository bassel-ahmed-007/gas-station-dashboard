import React from "react";
import CountUp from "react-countup";

function Header() {
  return (
    <header className="w-full h-[90px] bg-[#FFFFFF] pl-[193px] pr-[90px] flex items-center justify-between flex-3 shadow-lg">
      {/* section one ============*/}
      <div className="flex items-center justify-between  gap-[60px]">
        <div className="flex items-center gap-[15px]">
          <div className="flex items-end text-mainColor relative">
            <i class="ri-circle-fill absolute left-[-10px] top-[-3px]"></i>
          </div>
          <div className="text-[35px] text-textColor">
            <i class="ri-gas-station-line"></i>
          </div>
          <span className="text-[32px] text-textColor">
            <CountUp
              start={0}
              end={5}
              duration={2}
              className="text-mainColor"
            />
            /7
          </span>
          <span className="text-[13px] text-textColor leading-4 font-semibold">
            Monitored <br />
            stations
          </span>
          <div></div>
        </div>

        <div className="flex items-center gap-[15px]">
          <div className="flex items-end text-mainColor relative">
            <i class="ri-circle-fill absolute left-[-10px] top-[-3px]"></i>
          </div>
          <div className="text-[35px] text-textColor">
            <i class="ri-arrow-go-back-fill"></i>
          </div>
          <span className="text-[32px] text-textColor">
            <CountUp
              start={0}
              end={20}
              duration={2}
              className="text-mainColor"
            />
            s
          </span>
          <span className="text-[13px] text-textColor leading-4 font-semibold">
            Last <br />
            Update
          </span>
          <div></div>
        </div>
      </div>
      {/* section one =============*/}

      {/* section two =============*/}
      <div className="w-[472px] h-[44px] bg-[#f9f5f3] rounded-[25px] flex items-center justify-between shadow-md">
        <button className="h-full w-[30%] flex items-center justify-center   font-bold rounded-[25px] focus:bg-mainColor focus:text-white hover:bg-[#F4DBD4]">
          Today
        </button>
        <button className="h-full w-[30%] flex items-center justify-center rounded-[25px] text-textColor font-semibold focus:bg-mainColor focus:text-white hover:bg-[#F4DBD4]">
          Yesterday
        </button>
        <button className="h-full w-[30%] flex items-center justify-center rounded-[25px] text-textColor font-semibold focus:bg-mainColor focus:text-white hover:bg-[#F4DBD4]">
          Last Week
        </button>
      </div>
      {/* section two =============*/}

      {/* section three =============*/}
      <div className="w-[540px] flex items-center justify-between">
        <div className="w-[50%] flex gap-[5px] ">
          <div className="text-mainColor h-full text-[18px] flex items-center transform rotate-90">
            <i class="ri-triangle-fill"></i>
          </div>
          <div className="pb-[7px] border-b-[2px] border-textColor">
            <input
              type="date"
              className="w-[210px] appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Select a date"
            />
          </div>
        </div>

        <div className="w-[50%] flex  gap-[5px]">
          <div className="text-mainColor h-full text-[18px] flex items-center">
            <i class="ri-square-fill"></i>
          </div>
          <div className="pb-[7px] border-b-[2px] border-textColor">
            <input
              type="date"
              className="w-[210px] appearance-none bg-transparent border-none  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Select a date"
            />
          </div>
        </div>
      </div>
      {/* section three =============*/}
    </header>
  );
}

export default Header;
