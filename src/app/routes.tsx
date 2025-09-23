import { RouteObject } from "react-router-dom";

import CalendarPage from "@/pages/calendar-page";
import HomePage from "@/pages/home-page";
import MockPage from "@/pages/mock-page";
import { ROUTES } from "@/shared/enums";

export const router: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <MockPage />,
  },
  {
    path: ROUTES.INBOX,
    element: <MockPage />,
  },
  {
    path: ROUTES.PRODUCTS,
    element: <MockPage />,
  },
  {
    path: ROUTES.INVOICES,
    element: <MockPage />,
  },
  {
    path: ROUTES.CUSTOMERS,
    element: <MockPage />,
  },
  {
    path: ROUTES.CHAT_ROOM,
    element: <MockPage />,
  },
  {
    path: ROUTES.CALENDAR,
    element: <CalendarPage />,
  },
  {
    path: ROUTES.HELP_CENTER,
    element: <MockPage />,
  },
  {
    path: ROUTES.SETTINGS,
    element: <MockPage />,
  },
  {
    path: ROUTES.NOTIFICATION,
    element: <MockPage />,
  },
  {
    path: ROUTES.NOT_FOUND_ROUTE,
    element: <MockPage />,
  },
  {
    path: ROUTES.ROOT,
    element: <HomePage />,
  },
];
