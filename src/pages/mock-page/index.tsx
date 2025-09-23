import { ReactElement } from "react";

import { PageLayout } from "@/components/layout";
import { sidebarMenuMock } from "@/shared/mocks/sidebarMenuMock";

const MockPage = (): ReactElement => {
  return <PageLayout items={sidebarMenuMock}>MockPage</PageLayout>;
};

export default MockPage;
