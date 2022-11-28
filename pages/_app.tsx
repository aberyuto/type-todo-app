import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { Task } from "./todo";

// export const Context = createContext<{
//   state: number;
//   setState: (val: number) => void;
// }>({ state: 0, setState: () => {} });

export const TodosContext = createContext<{
  taskList: Task[];
  setTaskList: (teskList: Task[]) => void;
}>({ taskList: [], setTaskList: () => {} });

export default function App({ Component, pageProps }: AppProps) {
  //const [state, setState] = useState(0);
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <TodosContext.Provider value={{ taskList, setTaskList }}>
      <Component {...pageProps} />
    </TodosContext.Provider>

    // <Context.Provider value={{ state, setState }}>
    //   <Component {...pageProps} />
    // </Context.Provider>
  );
}
