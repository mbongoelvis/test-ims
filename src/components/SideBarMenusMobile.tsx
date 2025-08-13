import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export const SideBarMenusMobile = ({ menu , onOpen}: { menu: any , onOpen: () => void }) => {
  // state to show the nested menu
  const [show, setShow] = useState<boolean>(false);
  // nested menu component
  return (
    <div className="flex flex-col gap-3 mt-8 z-50">
      {menu?.map((item: any, index: number) => (
        <div key={index}>
          {item.links ? (
            <div>
              <div className="flex gap-10 md:gap-3 lg:gap-10 items-center cursor-pointer hover:opacity-60 duration-200" onClick={() => setShow(!show)}>
                <div className="flex gap-2">
                  <img src={item.icon} className="w-5 h-5 object-contain" />
                  <p className="text-white flex md:hidden lg:flex">
                    {item.title}
                  </p>
                </div>
                {show ? (
                  <FaAngleUp className="text-white" />
                ) : (
                  <FaAngleDown className="text-white" />
                )}
              </div>
              {show && <Nested onOpen={onOpen} nested={item.links} />}
            </div>
          ) : (
            <NavLink
              end
              to={item.link}
              key={index}
              onClick={onOpen}
              className={({ isActive }) =>
                `hover:pl-2 duration-200 flex gap-2 text-white hover:opacity-60 ${
                  isActive ? "bg-dprimary pl-3 py-2 rounded-lg" : ""
                }`
              }
            >
              <img src={item.icon} className="w-5 h-5 object-contain" />
              <p className="flex md:hidden lg:flex">{item.title}</p>
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );
};

// nested menu component
const Nested = ({ nested, onOpen }: { nested: any, onOpen: () => void }) => {
  return (
    <div className="flex flex-col gap-2 pl-4 mt-2 border-l-1 border-gray-300 ml-5">
      {nested.map((nestedItem: { title: any; link: string }, key: number) => {
        return (
          <NavLink
            end
            onClick={onOpen}
            key={key}
            className={({ isActive }) =>
              `hover:pl-2 duration-200 flex gap-2 text-white hover:opacity-60 ${
                isActive ? "bg-dprimary pl-3 py-2 rounded-lg" : ""
              }`
            }
            to={nestedItem.link}
          >
            {nestedItem.title}
          </NavLink>
        );
      })}
    </div>
  );
};
