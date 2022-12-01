import Link from "next/link";
import { Button } from "@mantine/core";
import React, { useContext, useState } from "react";
import { Task } from "../../pages/todo";
import { SimpleDatePicker } from "./Calendar";
//import { Context } from "../../pages/_app";

export type Props = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

export const TodoList = ({ taskList, setTaskList }: Props) => {
  const handleDelete = (id: number) => {
    //filter関数tureなら残す,falseなら除外
    setTaskList(taskList.filter((task: Task) => task.id !== id));
  };

  const [flag, Setflag] = useState(false);

  //const { state, setState } = useContext(Context);

  const handleDetail = (id: number) => {
    Setflag(true);
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
              <SimpleDatePicker />
            </div>
            <div className="icons">
              <Button.Group>
                <Button
                  radius="xl"
                  size="sm"
                  variant="outline"
                  color="green"
                  onClick={() => handleCompleted(task.id)}
                >
                  完了
                </Button>
                <Button
                  radius="xl"
                  size="sm"
                  variant="outline"
                  color="red"
                  onClick={() => handleDelete(task.id)}
                >
                  削除
                </Button>
                <Button
                  radius="xl"
                  size="sm"
                  variant="outline"
                  onClick={() => handleDetail(task.id)}
                >
                  <Link href={`/${task.id}/detail`}>詳細</Link>
                </Button>
              </Button.Group>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
