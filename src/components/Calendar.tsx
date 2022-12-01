import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type DateList = {
  startDate: Date;
  setStartDate: (startDate: Date) => void;
};

// export const SimpleDatePicker = () => {
//   const today = new Date();
//   const [startDate, setStartDate] = useState(null);

//   return (
//     <>
//       <p>完了期限:</p>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         openToDate={new Date(today)}
//         placeholderText="完了日を選択してください"
//       />
//     </>
//   );
// };

export const SimpleDatePicker = ({ startDate, setStartDate }: DateList) => {
  const today = new Date();
  return (
    <>
      <p>完了期限:</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        openToDate={new Date(today)}
        placeholderText="完了日を選択してください"
      />
    </>
  );
};
