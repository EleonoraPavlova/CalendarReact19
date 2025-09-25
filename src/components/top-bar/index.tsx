import { ReactElement } from "react";
import { Link } from "react-router-dom";

import Bell from "@/assets/icons/bell.svg?react";
import Chat from "@/assets/icons/chat.svg?react";
import Help from "@/assets/icons/help.svg?react";
import Button from "@/components/button";
import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import Logo from "@/components/logo";
import { ROUTES } from "@/shared/enums";
import { dropdownItems } from "@/shared/mocks/dropdownItems";
import { userMock } from "@/shared/mocks/userMock";
import { SidebarItem } from "@/shared/types";

type Props = {
  items: SidebarItem[];
};

const TopBar = ({ items }: Props): ReactElement => {
  const placeholder = "Search transactions, invoices or help";
  const logoName = "IMPEKABLE";

  return (
    <header className="row-span-1 col-span-2 flex items-center h-auto shadow-md shadow-black/10 bg-white gap-[6px]">
      <Logo logoName={logoName} items={items} />
      <div
        className="flex flex-1 items-center sm:py-3 sm:px-4 sm:gap-4
        md:py-4 md:px-5 md:gap-[22px]"
      >
        <Input placeholder={placeholder} isSearch name="search" />

        <div className="flex items-center relative pr-[21px] after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-[#E7E9F0]">
          <div className="flex items-center gap-[22px]">
            <Button to={ROUTES.HELP_CENTER} as={Link} variant="icon" className="max-660-hidden">
              <Help className="w-5 h-5 text-[#BCBCCB]" />
            </Button>
            <Button to={ROUTES.CHAT_ROOM} as={Link} variant="icon" className="max-660-hidden">
              <Chat className="w-5 h-5 text-[#BCBCCB]" />
            </Button>
            <Button to={ROUTES.NOTIFICATION} as={Link} variant="icon">
              <div className="relative">
                <Bell className="w-5 h-5 text-[#BCBCCB]" />
                {userMock.messages.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 block h-2 w-2 rounded-full bg-[#FFC06A] ring-2 ring-white"></span>
                )}
              </div>
            </Button>
          </div>
        </div>

        <Dropdown items={dropdownItems} user={userMock} />
      </div>
    </header>
  );
};

export default TopBar;
