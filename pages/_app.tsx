import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, FC, useState } from "react";
import { Task } from "./todo";

import { DetailList } from "../src/components/DetilDisplay";

import React from "react";

export const DateContext = createContext<{
  startDate: Date;
  setStartDate: (startDate: Date) => void;
}>({ startDate: Date, setStartDate: () => {} });

export const TodosContext = createContext<{
  taskList: Task[];
  setTaskList: (teskList: Task[]) => void;
}>({ taskList: [], setTaskList: () => {} });

export const DetailContext = createContext<{
  detailList: DetailList[];
  setDetailList: (detail: DetailList[]) => void;
}>({ detailList: [], setDetailList: () => {} });

//_appが呼び出され値が受け渡される
export default function App({ Component, pageProps }: AppProps) {
  //const [state, setState] = useState(0);

  const [taskList, setTaskList] = useState<Task[]>([]);

  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [detailList, setDetailList] = useState<DetailList[]>([]);

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
