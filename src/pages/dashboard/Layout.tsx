import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserProfile } from "../../components/UserProfile";
import { sideBarData } from "../../constants/sideBar";
import { SideBarMenusDesktop } from "../../components/SideBarMenusDesktop";
import { SideBarMenusMobile } from "@/components/SideBarMenusMobile";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NotificationUI } from "@/components/Notification/NotificationUI";

export const Layout = () => {
  // show menu state
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <div className="w-full min-h-screen flex">
      {/* sidebar  */}
      <div
        className={`fixed ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static px-4 fixed duration-200 pt-3 min-h-screen z-30 md:z-0 bg-dsecondary`}
      >
        <div className="sticky top-3 z-30">
          {/* close menu */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-white cursor-pointer"
            >
              <FaXmark className="text-2xl" />
            </button>
          </div>
          {/* profile section */}
          <UserProfile />
          {/* menues */}
          <div className="z-30">
            {/* mobile menu */}
            <div className="flex md:hidden">
              <SideBarMenusMobile
                onOpen={() => setShowMenu(false)}
                menu={sideBarData}
              />
            </div>
            {/* desktop menu */}
            <div className="hidden md:flex">
              <SideBarMenusDesktop menu={sideBarData} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        {/* top bar */}
        <div className="w-full min-h-12 py-3 sticky z-20 top-0 bg-white border-b-1 flex justify-between md:justify-end items-center px-5 border-borderr-color shadow-sm">
          {/* hamburger menu for mobile view */}
          <div className="md:hidden">
            <button
              className="cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaBars className="text-black text-xl" />
            </button>
          </div>
          {/* notification and calendar */}
          <NotificationUI notificationStatus={true} />
        </div>
        {/* component outlet that shows all the other pages */}
        <div className="w-full min-h-screen bg-dashboard p-5 relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
