import { colorsDots, fallBackColor } from "@/components/calendar/calendar.consts";
import { CalendarEvent } from "@/components/calendar/calendar.types";

export const useEventStyle = () => {
  const eventStyleGetter = (event: CalendarEvent) => {
    const found = colorsDots.find((c) => c.value === event.color) ?? fallBackColor;

    return {
      style: {
        backgroundColor: found.hex,
      },
    };
  };

  return { eventStyleGetter };
};
