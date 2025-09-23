import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { SidebarItem } from "@/shared/types";

type Props = {
  menu: SidebarItem[];
};

const Sidebar = ({ menu }: Props): ReactElement => {
  return (
    <div className="row-span-1 row-start-2 flex w-[260px] bg-[#43425D] text-white min-h-screen gap-[7px]">
      <ul className="w-full">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className="px-[25px] py-[18px]">
              <NavLink to={item.route} className="flex gap-[11px] items-center">
                <Icon aria-hidden="true" className="w-4 h-4 text-[#A5A4BF]" />
                <p className="text-[15px] hover:text-zinc-300 transition-colors duration-200">
                  {item.label}
                </p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
