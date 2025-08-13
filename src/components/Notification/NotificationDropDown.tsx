import React from 'react'
import { NotificationCard } from './NotificationCard';

export const NotificationDropDown = () => {
  return (
    <div className="border min-h-12 w-[320px] max-h-[300px] overflow-scroll bg-white absolute p-3 rounded-lg top-10 right-0">
      {/* <p className='text-sm mb-2'>Notifications</p> */}
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </div>
  );
}
