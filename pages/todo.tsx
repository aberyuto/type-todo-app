import { Title } from "../src/components/Title";
import { InputForm } from "../src/components/InputForm";
import { TodoList } from "../src/components/TodoList";
import { useContext, useState } from "react";
import { Completed } from "../src/components/Completed";
import { TodosContext } from "./_app";
import { SimpleDatePicker } from "../src/components/Calendar";

export type Task = {
  //オブジェクトの配列の作成
  id: number;
  text: string;
  completed: boolean;
};

export type DateList = { tododate: Date };

function App() {
  //const [taskList, setTaskList] = useState<Task[]>([]);

  const { taskList, setTaskList } = useContext(TodosContext);

  return (
    <>
      <div className="body">
        <Title />
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
        <p>完了リスト一覧</p>
        <Completed taskList={taskList} setTaskList={setTaskList} />
      </div>
    </>
  );
}

export default App;
