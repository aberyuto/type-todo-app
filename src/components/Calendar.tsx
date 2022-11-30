import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type DateList = {
  id: number;
  date: Date;
};

export const SimpleDatePicker = () => {
  const today = new Date();
  const [date, setDate] = useState(today);

  return (
    <DatePicker
      selected={date}
      onChange={(selectedDate) => {
        setDate(selectedDate || today);
      }}
    />
  );
};
