import React from "react";
import { Task } from "../../pages/todo";

type Props = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

export const TodoList = ({ taskList, setTaskList }: Props) => {
  const handleDelete = (id: number) => {
    //filter関数tureなら残す,falseなら除外
    setTaskList(taskList.filter((task: Task) => task.id !== id));
  };

  const handleCompleted = (id: number) => {
    setTaskList(
      taskList.map((task: Task) => {
        if (id === task.id) {
          return {
            ...task,
            //trueからfalseに変換
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };
  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task: Task, index: number) => (
          <div
            className={`todo ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => handleCompleted(task.id)}>完了</button>
              <button onClick={() => handleDelete(task.id)}>削除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
