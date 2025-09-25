import { ReactElement } from "react";

import CalendarComponent from "@/components/calendar";
import { PageLayout } from "@/components/layout";
import { sidebarMenuMock } from "@/shared/mocks/sidebarMenuMock";

const CalendarPage = (): ReactElement => {
  return (
    <PageLayout items={sidebarMenuMock}>
      <div className="flex flex-col gap-8 min-h-0">
        <h2 className="text-[28px] leading-[40px] text-[#43425D]">Calendar</h2>
        <CalendarComponent />
      </div>
    </PageLayout>
  );
};

export default CalendarPage;
