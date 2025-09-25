import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import { CalendarEvent } from "@/components/calendar/calendar.types";
import CalendarPopup from "@/components/calendar/calendar-popup";
import { useEventStyle } from "@/components/calendar/useEventStyle";
import Tooltip from "@/components/tooltip";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const CalendarComponent = (): ReactElement => {
  const eventState: CalendarEvent[] = [
    {
      id: 1,
      title: "Event name",
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      notes: "",
      color: "blue",
    },
  ];
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpenEvent, setIsOpenEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [selectedColor, setSelectedColor] = useState<CalendarEvent["color"]>(eventState[0].color);

  const { eventStyleGetter } = useEventStyle();

  const STORAGE_KEY = "calendar-events";

  const rehydrateFromLocalStorage = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved).map((ev: CalendarEvent) => ({
        ...ev,
        start: new Date(ev.start),
        end: new Date(ev.end),
      }));
    }
    return eventState;
  };

  const [events, setEvents] = useState<CalendarEvent[]>(rehydrateFromLocalStorage);

  const showTooltip = (msg: string) => {
    setTooltip(msg);
    setTimeout(() => setTooltip(null), 3000);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  const moveEvent = ({ event, start, end }: { event: CalendarEvent; start: Date; end: Date }) => {
    const updated = events.map((e) => (e.id === event.id ? { ...e, start, end } : e));
    setEvents(updated);
  };

  const resizeEvent = ({ event, start, end }: { event: CalendarEvent; start: Date; end: Date }) => {
    const updated = events.map((e) => (e.id === event.id ? { ...e, start, end } : e));
    setEvents(updated);
  };

  const createEvent = (slotInfo: CalendarEvent) => {
    const now = new Date();

    if (slotInfo.start < now) {
      showTooltip("You cannot create/edit an event in the past");
      return;
    }

    setSelectedDate(slotInfo.start);
    setSelectedEvent(null);
    setIsOpenEvent(true);
  };

  const onSelectEvent = useCallback((event: CalendarEvent) => {
    const now = new Date();
    if (event.end < now) {
      showTooltip("The event in the past");
      return;
    }

    setSelectedEvent(event);
    setSelectedColor(event.color);
    setSelectedDate(null);
    setIsOpenEvent(true);
  }, []);

  const handleSaveEvent = (eventData: CalendarEvent) => {
    const eventWithColor = { ...eventData, color: selectedColor };

    if (eventData.id) {
      setEvents((prev) => prev.map((ev) => (ev.id === eventData.id ? eventWithColor : ev)));
    } else {
      const newEvent = {
        ...eventWithColor,
        id: events.length + 1,
      };
      setEvents((prev) => [...prev, newEvent]);
    }
    setIsOpenEvent(false);
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (id: number) => {
    setEvents((prev) => prev.filter((ev) => ev.id !== id));
    setIsOpenEvent(false);
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  return (
    <div className="p-4 bg-white shadow-[0px_2px_6px_#0000000A]">
      <h3 className="text-lg text-[#4D4F5C] mb-[15px]">Calendar View</h3>
      <DnDCalendar
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        localizer={localizer}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        resizable
        selectable
        onSelectSlot={createEvent}
        onSelectEvent={onSelectEvent}
        eventPropGetter={eventStyleGetter}
        style={{ height: "79vh" }}
      />
      {isOpenEvent && (
        <CalendarPopup
          isOpen={isOpenEvent}
          onClose={() => setIsOpenEvent(false)}
          onDelete={handleDeleteEvent}
          onSave={handleSaveEvent}
          defaultDate={selectedDate ?? undefined}
          event={selectedEvent ?? undefined}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      )}
      {tooltip && <Tooltip message={tooltip} />}
    </div>
  );
};

export default CalendarComponent;
