import { useEffect, useState } from "react";
import notification from "../../assets/icons/notification.png";
import calendar from "../../assets/icons/calender.png";
import { NotificationDropDown } from "./NotificationDropDown";
import { CalenderComponent } from "../Calender/CalenderComponent";

export const NotificationUI = ({
  notificationStatus,
}: {
  notificationStatus: boolean;
}) => {
  // state to handle view of notification
  const [view, setView] = useState<boolean>(false);
  // handle calender open
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="flex justify-center gap-4 items-center">
      <div
        className="p-2 border border-borderr-color rounded-md relative cursor-pointer"
        onClick={() => setView(!view)}
      >
        {/* indicator */}
        {notificationStatus && (
          <div className="w-2 h-2 bg-ddanger rounded-full absolute top-[3px] right-[6px]"></div>
        )}
        <img
          src={notification}
          className="w-4 h-4 md:w-5 md:h-5 object-contain"
          alt="notification"
        />
        {/* notification drop down */}
        {view ? <NotificationDropDown /> : null}
      </div>
      {/* calendar */}
      <div
        className="p-2 border border-borderr-color rounded-md cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src={calendar}
          className="w-4 h-4 md:w-5 md:h-5 object-contain"
          alt="calender"
        />
      </div>
      <CalenderComponent isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};
