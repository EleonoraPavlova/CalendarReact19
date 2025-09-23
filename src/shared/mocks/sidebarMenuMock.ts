import BarChartIcon from "@/assets/icons/bar-chart.svg?react";
import CalendarIcon from "@/assets/icons/calendar.svg?react";
import ChatIcon from "@/assets/icons/chat.svg?react";
import CustomersIcon from "@/assets/icons/customer.svg?react";
import HelpIcon from "@/assets/icons/help.svg?react";
import HomeIcon from "@/assets/icons/home.svg?react";
import InboxIcon from "@/assets/icons/inbox.svg?react";
import InvoicesIcon from "@/assets/icons/invoices.svg?react";
import ProductsIcon from "@/assets/icons/products.svg?react";
import SettingsIcon from "@/assets/icons/settings.svg?react";
import { ROUTES } from "@/shared/enums";
import { SidebarItem } from "@/shared/types";

export const sidebarMenuMock: SidebarItem[] = [
  {
    id: 1,
    label: "Home",
    icon: HomeIcon,
    route: ROUTES.HOME,
  },
  {
    id: 2,
    label: "Dashboard",
    icon: BarChartIcon,
    route: ROUTES.DASHBOARD,
  },
  {
    id: 3,
    label: "Inbox",
    icon: InboxIcon,
    route: ROUTES.INBOX,
  },
  {
    id: 4,
    label: "Products",
    icon: ProductsIcon,
    route: ROUTES.PRODUCTS,
  },
  {
    id: 5,
    label: "Invoices",
    icon: InvoicesIcon,
    route: ROUTES.INVOICES,
  },
  {
    id: 6,
    label: "Customers",
    icon: CustomersIcon,
    route: ROUTES.CUSTOMERS,
  },
  {
    id: 7,
    label: "Chat room",
    icon: ChatIcon,
    route: ROUTES.CHAT_ROOM,
  },
  {
    id: 8,
    label: "Calendar",
    icon: CalendarIcon,
    route: ROUTES.CALENDAR,
  },
  {
    id: 9,
    label: "Help Center",
    icon: HelpIcon,
    route: ROUTES.HELP_CENTER,
  },
  {
    id: 10,
    label: "Settings",
    icon: SettingsIcon,
    route: ROUTES.SETTINGS,
  },
];
