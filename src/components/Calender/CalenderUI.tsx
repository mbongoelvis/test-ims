import React from "react";
import { FaXmark } from "react-icons/fa6";
import { Calendar } from "../ui/calendar";
import { CreateReminder } from "../Reminder/CreateReminder";
import { UpcomingEvents } from "../UpcomingEvents";

export const CalenderUI = ({  closeMenu }: { closeMenu: () => void }) => {
  // state for current date
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <div className="max-w-[320px] w-[320px] h-screen overflow-scroll bg-white px-3 pb-5">
      {/* close button */}
      <div className="flex justify-end p-2 mt-3">
        <FaXmark
          className="hover:text-gray-700 text-2xl cursor-pointer"
          onClick={closeMenu}
        />
      </div>
      {/* heading */}
      <div>
        <h3 className="font-semibold text-lg">Task and Reminders</h3>
        <p className="text-[13px] opacity-40 font-regular">
          Create a reminder Here
        </p>
      </div>
      {/* calender it self */}
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg w-full mt-3 border"
        />
      </div>
      {/* add reminder section */}
      <div>
        <CreateReminder />
      </div>
      {/* upcomming events */}
      <UpcomingEvents />
    </div>
  );
};
