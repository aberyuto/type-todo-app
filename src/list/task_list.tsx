import { useState } from "react";
import { Task } from "../../pages/todo";

function task_list({ id, text, completed }: Task) {
  const [taskList, setTaskList] = useState<Task[]>([]);
  setTaskList([
    //第一引数に最初のオブジェクトの情報
    //第二引数にオブジェクト
    ...taskList,
    {
      id: id,
      text: text,
      completed: completed,
    },
  ]);

  return taskList;
}

export default task_list;
