import styles from "../styles/Home.module.css";
import { Title } from "../src/components/Title";
import { InputForm } from "../src/components/InputForm";
import { TodoList } from "../src/components/TodoList";
import { useContext, useState } from "react";
import Link from "next/link";
import { Completed } from "../src/components/Completed";
import task_list from "../src/list/task_list";
import { TodoContext } from "../src/components/providers/TodoProvider";
import { DetailContext, TodosContext } from "./_app";
import { DetailList } from "../src/components/DetilDisplay";

export type Task = {
  //オブジェクトの配列の作成
  id: number;
  text: string;
  completed: boolean;
  item?: string[];
};

type Item = {
  item: string;
  setItem: (detail: DetailList[]) => void;
};

function App() {
  //const [taskList, setTaskList] = useState<Task[]>([]);

  const { taskList, setTaskList } = useContext(TodosContext);
  const { detailList, setDetailList } = useContext(DetailContext);

  return (
    <>
      <div className="body">
        <Title />
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
        {console.log(taskList)}
        <p>完了リスト一覧</p>
        <Completed taskList={taskList} setTaskList={setTaskList} />
      </div>
    </>
  );
}

export default App;
