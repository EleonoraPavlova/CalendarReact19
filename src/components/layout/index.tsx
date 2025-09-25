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
    <div
      className="grid min-h-screen grid-rows-[45px_1fr] sm:grid-rows-[50px_1fr] grid-cols-[10px_1fr]
    sm:grid-cols-[200px_1fr] 2xl:grid-rows-[70px_1fr] 2xl:grid-cols-[260px_1fr]"
    >
      <TopBar items={items} />
      <SideBar menu={items} className="hidden sm:flex" />
      <main
        className="row-span-1 row-start-2 col-start-2 p-4 md:p-8
        lg:pt-[32px] lg:pr-[95px] lg:pb-[103px] lg:pl-[55px]
         overflow-auto h-[calc(100vh-70px)]"
      >
        {children}
      </main>
    </div>
  );
};
