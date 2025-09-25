export type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  notes?: string;
  color?: "blue" | "green" | "red" | "yellow";
};
