import React, { useState } from "react";
import { Task } from "../../pages/todo";
import { Button } from "@mantine/core";

type Props = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

export const Completed = ({ taskList, setTaskList }: Props) => {
  const handleDelete = (id: number) => {
    //filter関数tureなら残す,falseなら除外
    const comp = [...taskList];
    setTaskList(
      comp.map((task) => {
        if (id === task.id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
    //setTaskList(comp.filter((comp) => comp.id !== id));
  };

  return (
    <div>
      <div>
        {taskList.map((task, index) => (
          <div key={index}>
            <div>
              <span>
                {task.completed == true ? (
                  <p>
                    {task.text}

                    <Button
                      variant="outline"
                      color="red"
                      onClick={() => handleDelete(task.id)}
                    >
                      削除
                    </Button>
                  </p>
                ) : (
                  <p></p>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
