import { Title } from "../src/components/Title";
import { InputForm } from "../src/components/InputForm";
import { TodoList } from "../src/components/TodoList";
import { useState } from "react";
import { ReactDOM } from "react";
import { TodoProvider } from "../src/components/providers/TodoProvider";

export type Task = {
  //オブジェクトの配列の作成
  id: number;
  text: string;
  completed: boolean;
};

const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoProvider>
        <TodoList taskList={taskList} setTaskList={setTaskList} />
      </TodoProvider>
    </div>
  );
};

export default App;
