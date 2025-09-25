import { FormEvent, useEffect, useState } from "react";

import Close from "@/assets/icons/close.svg?react";
import Button from "@/components/button";
import Input from "@/components/input";

export type CalendarEvent = {
  id?: string | number;
  title: string;
  start: Date;
  end: Date;
  notes?: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: CalendarEvent) => void;
  defaultDate?: Date;
  event?: CalendarEvent;
};

const CalendarPopup = ({ isOpen, onClose, onSave, defaultDate, event }: Props) => {
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
      const d = new Date(defaultDate);
      setDate(d.toISOString().slice(0, 10));
      setTime(d.toISOString().slice(11, 16));
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
      id: event?.id,
      title,
      start,
      end,
      notes,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-10">
      <div className="bg-white rounded-[10px] w-[320px] shadow-lg border border-[#43425D]">
        <div className="flex items-center justify-end">
          <Button type="button" onClick={onClose} variant="icon">
            <Close className="w-5 h-5" />
          </Button>
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
            <Button type="button" onClick={onClose} variant="danger">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CalendarPopup;
