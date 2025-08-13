import {useState} from 'react'

export const NotificationCard = () => {
  // state to handle view of notification
  const [viewed, setViewed] = useState<boolean>(false);
  return (
    <div className={`${viewed? "bg-white" : "bg-gray-100"}max-w-[300px] cursor-pointer hover:bg-gray-50 duration-300 group rounded-md px-2 `}>
      {/* title */}
      <p className="text-sm underline opacity-75 group-hover:opacity-100">Meet Digisol Today</p>
      {/* notification items */}
      <p className="text-gray-500 text-[12px] mt-1">This appointment is for the ims and there are other things to discuss on that meet</p>
    </div>
  );
}
