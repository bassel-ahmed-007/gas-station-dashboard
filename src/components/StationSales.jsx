import React from "react";
import CountUp from "react-countup";

function StationSales() {
  return (
    <section className="w-[297px] h-[361px]  absolute right-[155px] top-[350px]">
      <div className="flex items-center justify-center mt-[40px] mb-[25px]">
        <h1 className="text-[20px] font-bold">Sales By Station</h1>
      </div>

      <div className="flex flex-col justify-between my-[30px]">
        <div className="flex items-center justify-between px-[10px]">
          <div className="text-textColor text-[35px]">
            <i class="ri-gas-station-line"></i>
          </div>
          <p className="font-semibold text-[16px]">Station Name</p>
          <p className="text-[22px] font-semibold text-textColor">
            <CountUp start={0} end={62721} duration={2} />
            m&sup3;
          </p>
        </div>

        <div className="w-full h-[8px] rounded-lg  bg-[#F4DBD4]">
          <div className="w-[96px] h-[8px] rounded-lg bg-mainColor"></div>
        </div>
      </div>

      <div className="flex flex-col justify-between my-[30px]">
        <div className="flex items-center justify-between px-[10px]">
          <div className="text-textColor text-[35px]">
            <i class="ri-gas-station-line"></i>
          </div>
          <p className="font-semibold text-[16px]">Station Name</p>
          <p className="text-[22px] font-semibold text-textColor">
            <CountUp start={0} end={62721} duration={2} />
            m&sup3;
          </p>
        </div>

        <div className="w-full h-[8px] rounded-lg bg-[#F4DBD4]">
          <div className="w-[96px] h-[8px] rounded-lg bg-mainColor"></div>
        </div>
      </div>

      <div className="flex flex-col justify-between my-[30px]">
        <div className="flex items-center justify-between px-[10px]">
          <div className="text-textColor text-[35px]">
            <i class="ri-gas-station-line"></i>
          </div>
          <p className="font-semibold text-[16px]">Station Name</p>
          <p className="text-[22px] font-semibold text-textColor">
            <CountUp start={0} end={62721} duration={2} />
            m&sup3;
          </p>
        </div>

        <div className="w-full h-[8px] rounded-lg bg-[#B9CDE2]"></div>
      </div>
    </section>
  );
}

export default StationSales;
