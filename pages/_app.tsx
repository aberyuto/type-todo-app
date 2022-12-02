import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, FC, useState } from "react";
import { Task } from "./todo";
import React from "react";

export const DateContext = createContext<{
  startDate: Date;
  setStartDate: (startDate: Date) => void;
}>({ startDate: Date, setStartDate: () => {} });

export const TodosContext = createContext<{
  taskList: Task[];
  setTaskList: (teskList: Task[]) => void;
}>({ taskList: [], setTaskList: () => {} });

export default function App({ Component, pageProps }: AppProps) {
  //const [state, setState] = useState(0);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const today = new Date();
  const [startDate, setStartDate] = useState(today);

  return (
    <>
      <DateContext.Provider value={{ startDate, setStartDate }}>
        <TodosContext.Provider value={{ taskList, setTaskList }}>
          <Component {...pageProps} />
        </TodosContext.Provider>
      </DateContext.Provider>
    </>
  );
}
