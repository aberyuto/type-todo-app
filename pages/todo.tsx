import styles from "../styles/Home.module.css";
import { Title } from "../src/components/Title";
import { InputForm } from "../src/components/InputForm";
import { TodoList } from "../src/components/TodoList";
import { useState } from "react";
import Link from "next/link";
import { Completed } from '../src/components/Completed';

export type Task = {
  //オブジェクトの配列の作成
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <>
      <div className="body">
        <Title />
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
        <p>完了リスト一覧</p>
      <Completed taskList={taskList} setTaskList={setTaskList} />
      </div>
      <Link href="/login">
        <button>ログインテスト</button>
      </Link>
    </>
  );
}

export default App;
