import clsx from "clsx";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { SidebarItem } from "@/shared/types";

type Props = {
  menu: SidebarItem[];
  className?: string;
};

const Sidebar = ({ menu, className }: Props): ReactElement => {
  return (
    <div
      className={clsx(
        "row-span-1 row-start-2 bg-[#43425D] text-white min-h-screen gap-[7px]",
        "w-[180px] sm:w-[200px] 2xl:w-[260px]",
        className
      )}
    >
      <nav className="w-full">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `w-full px-[25px] py-[18px] gap-[12px] flex items-center
               ${isActive && "bg-[#3c3b54] border-l-[5px] border-l-[#A3A0FB]"}`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    aria-hidden="true"
                    className={`w-4 h-4 ${isActive ? "text-[#A3A0FB]" : "text-[#A5A4BF]"} `}
                  />
                  <p className="text-[15px] hover:text-zinc-300 transition-colors duration-200">
                    {item.label}
                  </p>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
