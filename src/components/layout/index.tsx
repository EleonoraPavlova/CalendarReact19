import { ReactElement, ReactNode } from "react";

import SideBar from "@/components/sideBar";
import TopBar from "@/components/top-bar";
import { SidebarItem } from "@/shared/types";

type Props = {
  items: SidebarItem[];
  children: ReactNode;
};

export const PageLayout = ({ items, children }: Props): ReactElement => {
  return (
    <div className="grid min-h-screen grid-rows-[70px_1fr] grid-cols-[260px_1fr]">
      <TopBar />
      <SideBar menu={items} />
      <main className="row-span-1 row-start-2 col-start-2 bg-white p-6">{children}</main>
    </div>
  );
};
