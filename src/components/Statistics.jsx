import React from "react";
import CountUp from "react-countup";

function Statistics() {
  return (
    <section>
      <div className="mt-[40px] ml-[50px] mb-[54px] w-[1202px] h-[164px] flex items-center justify-around">
        <div className="w-[20%] h-[80%] flex flex-col items-start justify-center pl-[35px]  bg-[#F4DBD4] rounded-[30px] shadow-xl">
          <p>
            <span className="text-[40px] ">
              <CountUp start={0} end={71028} duration={2} />
            </span>
            <span className="text-[22px]"> EGP</span>
          </p>
          <p className="text-[17px] font-bold">Total Value</p>
          <div className="flex items-center justify-self-center gap-[5px] text-mainColor font-bold">
            <span className="text-[25px]">&#9662;</span>
            <p className="text-[16px]">
              <CountUp start={0} end={20} duration={2} />%
            </p>
          </div>
        </div>

        <div className="w-[20%] h-[80%] flex flex-col items-start justify-center pl-[35px]  bg-white rounded-[30px] shadow-xl">
          <p>
            <span className="text-[40px]">
              <CountUp start={0} end={20000} duration={2} />
            </span>
            <span className="text-[22px]"> m&sup3;</span>
          </p>
          <p className="text-[17px] font-bold">Total Sales</p>
          <div className="flex items-center justify-self-center gap-[5px] text-[#00CBC0] font-bold">
            <span className="text-[25px]">&#9652;</span>
            <p className="text-[16px]">
              <CountUp start={0} end={50} duration={2} /> m&sup3;
            </p>
          </div>
        </div>

        <div className="w-[20%] h-[80%] flex flex-col items-start justify-center pl-[35px]  bg-white rounded-[30px] shadow-xl">
          <p>
            <span className="text-[40px] ">
              <CountUp start={0} end={20000} duration={2} />
            </span>
            <span className="text-[22px]"> m&sup3;</span>
          </p>
          <p className="text-[17px] font-bold">Avg Sales</p>
          <div className="flex items-center justify-self-center gap-[5px] text-mainColor font-bold">
            <span className="text-[25px]">&#9662;</span>
            <p className="text-[16px]">
              <CountUp start={0} end={50} duration={2} /> m&sup3;
            </p>
          </div>
        </div>

        <div className="w-[20%] h-[80%] flex flex-col items-start justify-center pl-[35px]  bg-white rounded-[30px] shadow-xl">
          <p>
            <span className="text-[40px] ">
              <CountUp start={0} end={1567} duration={2} />
            </span>
          </p>
          <p className="text-[17px] font-bold">
            Total transaction <br /> Count
          </p>
          <div className="flex items-center justify-self-center gap-[5px] text-[#00CBC0] font-bold mt-[-10px]">
            <span className="text-[25px]">&#9652;</span>
            <p className="text-[16px] ">
              <CountUp start={0} end={20} duration={2} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Statistics;
