import { CalendarEvent } from "@/components/calendar/calendar.types";

export const colorsDots: { name: string; value: CalendarEvent["color"]; hex: string }[] = [
  { name: "Blue", value: "blue", hex: "#3B86FF" },
  { name: "Green", value: "green", hex: "#22C55E" },
  { name: "Red", value: "red", hex: "#EF4444" },
  { name: "Yellow", value: "yellow", hex: "#EAB308" },
];

export const fallBackColor = { name: "Blue", value: "blue", hex: "#3B86FF" };
