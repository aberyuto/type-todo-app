import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, FC, useState } from "react";
import { Task } from "./todo";
import React from "react";

export const DateContext = createContext<{
  dateList: Date;
  setDateList: (dateList: Date) => void;
}>;
({ dateList: Date, setDateList: () => {} });

export const TodosContext = createContext<{
  taskList: Task[];
  setTaskList: (teskList: Task[]) => void;
}>({ taskList: [], setTaskList: () => {} });

export default function App({ Component, pageProps }: AppProps) {
  //const [state, setState] = useState(0);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const today = new Date();
  const [date, setDate] = useState(today);

  return (
    <>
      <TodosContext.Provider value={{ taskList, setTaskList }}>
        <Component {...pageProps} />
      </TodosContext.Provider>
    </>
  );
}
