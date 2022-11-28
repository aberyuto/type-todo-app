import { Title } from "../src/components/Title";
import { InputForm } from "../src/components/InputForm";
import { TodoList } from "../src/components/TodoList";
import { createContext, useState } from "react";
import { Completed } from "../src/components/Completed";
import { DeatilDisplay } from "../src/components/DetilDisplay";
import React from "react";
import Link from "next/link";
import DetailPage from "./todos/[id]";

export type Task = {
  //オブジェクトの配列の作成
  id: number;
  text: string;
  completed: boolean;
  detail: boolean;
};

type ContextType = {
  id: number;
  text: string;
  completed: boolean;
  setTaskList: (teskList: Task[]) => {};
};

type Props = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

// export const taskContext = React.createContext({} as ContextType);
// export const taskProvider = ({ taskList, setTaskList }: Props) => {
//   <taskContext.Provider value={(taskList, setTaskList)}>
//     <DeatilDisplay />
//   </taskContext.Provider>;
// };

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <>
      <div className="body">
        <Title />
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
        <DeatilDisplay taskList={taskList} setTaskList={setTaskList} />
        <p>完了リスト一覧</p>
        <Completed taskList={taskList} setTaskList={setTaskList} />
      </div>
    </>
  );
}

export default App;
