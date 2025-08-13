import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export const SideBarMenusDesktop = ({ menu }: { menu: any }) => {
  // state to show the nested menu
  const [show, setShow] = useState<boolean>(false);
  
  // nested menu component
  return (
    <div className="flex flex-col gap-3 mt-8 h-full">
      {menu?.map((item: any, index: number) => (
        <div key={index}>
          {item.links ? (
            <div>
              <div
                className="flex gap-10 md:gap-3 lg:gap-10 items-center cursor-pointer hover:opacity-60 duration-200"
                onClick={() => setShow(!show)}
              >
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
              {show && <Nested nested={item.links} />}
            </div>
          ) : (
            <NavLink
              end
              to={item.link}
              key={index}
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
const Nested = ({ nested }: { nested: any}) => {
  return (
    <div className="relative pl-4 mt-2 ml-5">
      {/* Animated border container */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-600/30 overflow-hidden">
        {/* Primary animated filling border */}
        <div 
          className="absolute left-0 w-full bg-gradient-to-b from-dprimary via-white to-dprimary opacity-30"
          style={{
            height: '0%',
            animation: 'borderFill 3s ease-in-out infinite alternate',
            transformOrigin: 'bottom'
          }}
        ></div>
        
        {/* Secondary pulsing border */}
        <div 
          className="absolute left-0 w-full h-full bg-gradient-to-t from-dprimary/50 to-transparent"
          style={{
            animation: 'borderPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            animationDelay: '1s'
          }}
        ></div>
        
        {/* Glowing effect */}
        <div 
          className="absolute left-0 w-full h-2 bg-dprimary rounded-full blur-sm"
          style={{
            animation: 'borderGlow 2s ease-in-out infinite, moveUpDown 3s ease-in-out infinite alternate'
          }}
        ></div>
      </div>
      
      <div className="flex flex-col gap-2">
        {nested.map((nestedItem: { title: any; link: string }, key: number) => {
          return (
            <NavLink
              end
              key={key}
              className={({ isActive }) =>
                `hover:pl-2 duration-200 flex gap-2 text-white hover:opacity-60 relative z-10 ${
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
      
      {/* Inline styles for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes borderFill {
            0% { 
              height: 0%;
              transform: translateY(100%);
              opacity: 0.3;
            }
            25% {
              height: 50%;
              transform: translateY(50%);
              opacity: 0.8;
            }
            50% {
              height: 100%;
              transform: translateY(0%);
              opacity: 1;
            }
            75% {
              height: 75%;
              transform: translateY(-25%);
              opacity: 0.9;
            }
            100% {
              height: 20%;
              transform: translateY(-80%);
              opacity: 0.4;
            }
          }
          
          @keyframes borderGlow {
            0%, 100% {
              opacity: 0.3;
              filter: blur(2px);
            }
            50% {
              opacity: 0.9;
              filter: blur(1px);
            }
          }
          
          @keyframes borderPulse {
            0%, 100% {
              opacity: 0.2;
              transform: scaleY(0.8);
            }
            50% {
              opacity: 0.6;
              transform: scaleY(1.2);
            }
          }
          
          @keyframes moveUpDown {
            0% {
              top: 0%;
            }
            50% {
              top: 50%;
            }
            100% {
              top: 90%;
            }
          }
        `
      }} />
    </div>
  );
};
