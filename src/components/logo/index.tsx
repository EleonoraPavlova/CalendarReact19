import { ReactElement, useState } from "react";

import Menu from "@/assets/icons/menu.svg?react";
import Sidebar from "@/components/sideBar";
import { SidebarItem } from "@/shared/types";

type Props = {
  logoName: string;
  items: SidebarItem[];
};

const Logo = ({ logoName, items }: Props): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-[180px] sm:w-[200px] 2xl:w-[260px] h-[45px] sm:h-[50px] 2xl:h-[70px] bg-[#3c3b53] text-white flex items-center pl-[20px]">
      <h2 className="text-bold text-[15px]">{logoName}</h2>
      <Menu className="w-5 h-5 block sm:hidden ml-6" onClick={toggleMenuHandler} />
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={toggleMenuHandler} />
          <div className="fixed top-0 left-0 w-[280px] h-full bg-[#43425D] z-50 shadow-lg text-white">
            <Sidebar menu={items} className="flex sm:hidden" />
          </div>
        </>
      )}
    </div>
  );
};

export default Logo;
