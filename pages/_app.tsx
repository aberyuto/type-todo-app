import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { Task } from "./todo";
import React from "react";

export const DateContext = createContext<{
  dateList: Date;
  setDateDate: (dateList: Date) => void;
}>;

export const TodosContext = createContext<{
  taskList: Task[];
  setTaskList: (teskList: Task[]) => void;
}>({ taskList: [], setTaskList: () => {} });

// export const DateContext = createContext<{
//   dateList: Date;
//   setDateDate: (dateList: Date) => void;
// }>;

export default function App({ Component, pageProps }: AppProps) {
  //const [state, setState] = useState(0);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [dateList, setDateDate] = useState("");
  return (
    <>
      <TodosContext.Provider value={{ dateList, setDateDate }}>
        <TodosContext.Provider value={{ taskList, setTaskList }}>
          <Component {...pageProps} />
        </TodosContext.Provider>
      </TodosContext.Provider>
    </>

    // <Context.Provider value={{ state, setState }}>
    //   <Component {...pageProps} />
    // </Context.Provider>
  );
}
