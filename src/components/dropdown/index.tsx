import { ReactElement, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Arrow from "@/assets/icons/arrow-down.svg?react";
import avatar from "@/assets/webp/avatar.webp";
import Button from "@/components/button";
import { DropdownItem, User } from "@/shared/types";

type Props = {
  items: DropdownItem[];
  user: User;
};

const Dropdown = ({ items, user }: Props): ReactElement => {
  const [isMenuOpen, isMenuOpenSet] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    isMenuOpenSet((prev) => !prev);
  };

  return (
    <div ref={dropdownRef} className="relative w-[186px]">
      <div className="cursor-pointer flex items-center gap-[11px]" onClick={toggleDropdown}>
        <h4 className="text-[13px] whitespace-nowrap flex items-center leading-5">{user.name}</h4>
        <div className="flex items-center w-4 h-4">
          <Arrow
            aria-label="arrowDown"
            className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </div>
        <img src={avatar} alt="avatar" className="w-[38px] h-[38px] rounded-full" />
      </div>
      {isMenuOpen && (
        <div
          className="absolute right-0 mt-1 w-40 bg-white border
          border-gray-200 rounded shadow-md z-50"
        >
          <ul className="p-3 text-sm text-gray-700">
            {items.map((item) => (
              <li key="item.id">
                <Button as={Link} to={item.route} className="justify-start border-none w-full">
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
