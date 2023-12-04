import React, { useState } from "react";
import Modal from "./Modal";
const data = [
  {
    id: "1",
    sales: "62.450",
    value: "550",
    state: "comperssion",
    totalcount: "5161",
    maxhour: "20",
    maxdate: "8-1-2022 | 10:16 PM",
  },
  {
    id: "2",
    sales: "62.450",
    value: "550",
    state: "comperssion",
    totalcount: "5161",
    maxhour: "20",
    maxdate: "8-1-2022 | 10:16 PM",
  },
  {
    id: "3",
    sales: "62.450",
    value: "550",
    state: "comperssion",
    totalcount: "5161",
    maxhour: "20",
    maxdate: "8-1-2022 | 10:16 PM",
  },
  {
    id: "4",
    sales: "62.450",
    value: "550",
    state: "comperssion",
    totalcount: "5161",
    maxhour: "20",
    maxdate: "8-1-2022 | 10:16 PM",
  },
  {
    id: "5",
    sales: "62.450",
    value: "550",
    state: "comperssion",
    totalcount: "5161",
    maxhour: "20",
    maxdate: "8-1-2022 | 10:16 PM",
  },
  {
    id: "6",
    sales: "62.450",
    value: "550",
    state: "comperssion",
    totalcount: "5161",
    maxhour: "20",
    maxdate: "8-1-2022 | 10:16 PM",
  },
];

function List() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-[1170px] h-[450px] flex flex-col absolute right-[580px] top-[330px] overflow-scroll overflow-x-hidden   scrollbar-thumb-mainColor scrollbar-track-[#F4DBD4] scrollbar-thin ">
      {data.map((item) => (
        <section
          key={item.id}
          className="w-[1150px] h-[200px] bg-white  rounded-[20px] px-[20px] my-[20px]"
        >
          <div className="flex items-center justify-between border-b-2 px-[20px]">
            <div className="flex items-center gap-4">
              <div className="text-mainColor text-[15px]">
                <i class="ri-circle-fill"></i>
              </div>
              <div className="text-mainColor text-[40px]">
                <i class="ri-gas-station-line"></i>
              </div>
              <span className="text-textColor text-[18px] font-bold">
                Station Name
              </span>
            </div>

            <div
              onClick={() => setShowModal(!showModal)}
              className="text-textColor text-[30px] cursor-pointer"
            >
              <i class="ri-more-fill"></i>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex items-center gap-[80px] m-[20px]">
              <p className="font-semibold text-[14px]">Total Sale</p>
              <p className="text-[12px] text-textColor">{item.sales}</p>
            </div>
            <div className="flex items-center gap-[80px] m-[20px]">
              <p className="font-semibold text-[14px]">Compression State</p>
              <p className="text-[12px] text-textColor">{item.state}</p>
            </div>
            <div className="flex items-center gap-[80px] m-[20px]">
              <p className="font-semibold text-[14px]">
                Max Transaction / hour
              </p>
              <p className="text-[12px] text-textColor">{item.maxhour}</p>
            </div>
            <div className="flex items-center gap-[80px] m-[20px]">
              <p className="font-semibold text-[14px]">Total Value</p>
              <p className="text-[12px] text-textColor">{item.value}</p>
            </div>
            <div className="flex items-center gap-[80px] m-[20px]">
              <p className="font-semibold text-[14px]">
                Total Transaction Count
              </p>
              <p className="text-[12px] text-textColor">{item.totalcount}</p>
            </div>
            <div className="flex items-center gap-[80px] m-[20px]">
              <p className="font-semibold text-[14px]">
                Max Transaction Date-Time
              </p>
              <p className="text-[12px] text-textColor">{item.maxdate}</p>
            </div>
          </div>
        </section>
      ))}

      {showModal && <Modal />}
    </div>
  );
}

export default List;
