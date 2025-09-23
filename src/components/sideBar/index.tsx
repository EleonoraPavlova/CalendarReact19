import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { SidebarItem } from "@/shared/types";

type Props = {
  menu: SidebarItem[];
};

const Sidebar = ({ menu }: Props): ReactElement => {
  return (
    <div className="row-span-1 row-start-2 flex w-[260px] bg-[#43425D] text-white min-h-screen gap-[7px]">
      <nav className="w-full">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `w-full px-[25px] py-[18px] gap-[12px] flex items-center
               ${isActive && "bg-[#3c3b54]"}`
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
