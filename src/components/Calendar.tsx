import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type DateList = {
  id: number;
  date: Date;
};

export const SimpleDatePicker = () => {
  const initialDate = new Date();
  const [startDate, setDate] = useState(initialDate);
  const handleChange = (e: any) => {
    setDate(e.target.value);
  };

  return <DatePicker selected={startDate} onChange={handleChange} />;
};
