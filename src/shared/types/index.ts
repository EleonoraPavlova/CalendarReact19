import React, { SVGProps } from "react";

export interface SidebarItem {
  id: number;
  label: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  route: string;
}

export interface DropdownItem {
  id: number;
  label: string;
  route: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  messages: string[];
}
