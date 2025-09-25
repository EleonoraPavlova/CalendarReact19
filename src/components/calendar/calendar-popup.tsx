import moment from "moment";
import { FormEvent, useEffect, useState } from "react";

import Close from "@/assets/icons/close.svg?react";
import Button from "@/components/button";
import { colorsDots } from "@/components/calendar/calendar.consts";
import { CalendarEvent } from "@/components/calendar/calendar.types";
import ColorPicker from "@/components/calendar/color-picker";
import Input from "@/components/input";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: CalendarEvent) => void;
  defaultDate?: Date;
  event?: CalendarEvent;
  selectedColor: CalendarEvent["color"];
  setSelectedColor: (color: CalendarEvent["color"]) => void;
  onDelete?: (id: CalendarEvent["id"]) => void;
};

const CalendarPopup = ({
  isOpen,
  onClose,
  onSave,
  defaultDate,
  event,
  selectedColor,
  setSelectedColor,
  onDelete,
}: Props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (event) {
      setTitle(event.title || "");
      setDate(event.start.toISOString().slice(0, 10));
      setTime(event.start.toISOString().slice(11, 16));
      setNotes(event.notes || "");
    } else if (defaultDate) {
      setDate(moment(defaultDate).format("YYYY-MM-DD"));
      setTime(moment(defaultDate).format("HH:mm"));
      setTitle("");
      setNotes("");
    }
  }, [defaultDate, event]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date || !time) return;

    const [hours, minutes] = time.split(":").map(Number);
    const start = new Date(date);
    start.setHours(hours, minutes, 0, 0);

    const end = new Date(start.getTime() + 60 * 60 * 1000);

    onSave({
      id: event?.id ?? 0,
      title,
      start,
      end,
      notes,
      color: selectedColor,
    });

    onClose();
  };

  const handleDelete = () => {
    if (!event?.id) return;
    onDelete?.(event?.id);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-10">
      <div className="bg-white rounded-[10px] w-[320px] shadow-lg border border-[#43425D]">
        <div className="flex items-center justify-end gap-6">
          <ColorPicker
            colorsDots={colorsDots}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <div className="flex items-center justify-end">
            <Button type="button" onClick={onClose} variant="icon">
              <Close className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-2 mt-0 mr-[20px] mb-[25px] ml-[20px]">
          <Input
            label="event name"
            name="event"
            value={title}
            onChange={(value) => setTitle(value)}
            maxLength={20}
            required
          />
          <Input
            type="date"
            name="event date"
            label="event date"
            value={date}
            onChange={(value) => setDate(value)}
            required
          />
          <Input
            type="time"
            name="event time"
            label="event time"
            value={time}
            onChange={(value) => setTime(value)}
            required
          />
          <Input
            label="notes"
            name="notes"
            value={notes}
            onChange={(value) => setNotes(value)}
            maxLength={30}
          />
          <div className="flex justify-between pt-5">
            <Button type="button" onClick={handleDelete} variant="danger">
              Delete
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CalendarPopup;
