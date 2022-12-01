import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type DateList = {
  id: number;
  date: Date;
};

export const SimpleDatePicker = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <p>
        完了期限:
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          openToDate={new Date(today)}
          placeholderText="完了日を選択してください"
        />
      </p>
    </>
  );
};
