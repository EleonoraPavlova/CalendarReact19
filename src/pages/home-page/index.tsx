import { ReactElement } from "react";

import { PageLayout } from "@/components/layout";
import { sidebarMenuMock } from "@/shared/mocks/sidebarMenuMock";

const HomePage = (): ReactElement => {
  return <PageLayout items={sidebarMenuMock}>HomePage</PageLayout>;
};

export default HomePage;
