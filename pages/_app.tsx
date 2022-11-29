import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { Task } from "./todo";
import { DetailList } from "../src/components/DetilDisplay";

// export const Context = createContext<{
//   state: number;
//   setState: (val: number) => void;
// }>({ state: 0, setState: () => {} });

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
  const [detailList, setDetailList] = useState<DetailList[]>([]);
  return (
    <TodosContext.Provider value={{ taskList, setTaskList }}>
      <DetailContext.Provider value={{ detailList, setDetailList }}>
        <Component {...pageProps} />
      </DetailContext.Provider>
    </TodosContext.Provider>
  );
}
