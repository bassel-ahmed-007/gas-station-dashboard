import React from "react";

function SideNav() {
  return (
    <nav className="h-[931px] w-[100px] bg-mainColor absolute top-0 left-0 z-10 rounded-tr-[25px] rounded-br-[25px] flex flex-col justify-between items-center py-[35px] text-white/60 text-[40px] shadow-[16px_2px_30px_-20px_black]">
      {/*=========== section one =============*/}
      <div>
        <div className="hover:text-white hover:cursor-pointer">
          <i class="ri-contrast-drop-fill"></i>
        </div>
      </div>
      {/*=========== section one =============*/}

      {/*=========== section one =============*/}
      <div>
        <ul>
          <li className="hover:text-white hover:cursor-pointer">
            <i class="ri-dashboard-3-line "></i>
          </li>
          <li className="text-white hover:cursor-pointer">
            <i class="ri-dashboard-fill"></i>
          </li>
          <li className="hover:text-white hover:cursor-pointer">
            <i class="ri-stack-fill"></i>
          </li>
          <li className="hover:text-white hover:cursor-pointer">
            <i class="ri-settings-3-fill"></i>
          </li>
          <li className="hover:text-white hover:cursor-pointer">
            <i class="ri-notification-3-fill"></i>
          </li>
        </ul>
      </div>
      {/*=========== section one =============*/}

      {/*=========== section one =============*/}
      <div>
        <div className="hover:text-white hover:cursor-pointer">
          <i class="ri-logout-box-r-fill"></i>
        </div>
      </div>
      {/*=========== section one =============*/}
    </nav>
  );
}

export default SideNav;
