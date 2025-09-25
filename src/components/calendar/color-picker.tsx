import clsx from "clsx";
import { ReactElement } from "react";

import { CalendarEvent } from "@/components/calendar/calendar.types";

type Props = {
  colorsDots: { value: CalendarEvent["color"]; hex: string }[];
  selectedColor: CalendarEvent["color"];
  setSelectedColor: (color: CalendarEvent["color"]) => void;
};

const ColorPicker = ({ colorsDots, selectedColor, setSelectedColor }: Props): ReactElement => {
  return (
    <div className="flex gap-3">
      {colorsDots.map((c) => (
        <div
          key={c.value}
          className={clsx(
            "w-4 h-4 rounded-full cursor-pointer border-2 transition-transform",
            selectedColor === c.value ? "scale-125 border-black/30" : "border-transparent"
          )}
          style={{ backgroundColor: c.hex }}
          onClick={() => setSelectedColor(c.value)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
