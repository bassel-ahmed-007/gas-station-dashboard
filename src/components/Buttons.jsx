import React from "react";

function Buttons({ showChart, setShowChart }) {
  return (
    <section className="mt-[51] mr-[580px] flex items-center justify-end ">
      <div className="w-[310px] h-[44px] flex items-center justify-between bg-white rounded-[25px] shadow-lg">
        <button
          onClick={() => setShowChart(true)}
          className="w-[50%] h-full focus:bg-mainColor rounded-[25px] focus:text-white hover:bg-[#F4DBD4"
        >
          <i class="ri-bar-chart-2-fill"></i> GRAPH
        </button>

        <button
          onClick={() => setShowChart(false)}
          className="w-[50%] h-full focus:bg-mainColor rounded-[25px] focus:text-white hover:bg-[#F4DBD4"
        >
          <i class="ri-list-indefinite"></i> LIST
        </button>
      </div>
    </section>
  );
}

export default Buttons;
