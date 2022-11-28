import Link from "next/link";
import React, { createContext, useContext, useState } from "react";
import { Context } from "../../pages/todos/[id]";
import { Task } from "../../pages/todo";
import { DeatilDisplay } from "./DetilDisplay";

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
    const comp = [...taskList];
    setTaskList(
      comp.map((task) => {
        if (id === task.id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  const handleDetail = (id: number) => {
    const detail = [...taskList];
    setTaskList(
      detail.map((task) => {
        if (id === task.id) {
          task.detail = !task.detail;
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
              <button onClick={() => handleDetail(task.id)}>詳細</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
