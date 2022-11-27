import React, { useState } from "react";
import { Task } from "../../pages/todo";
type Props = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

export const DeatilDisplay = ({ taskList, setTaskList }: Props) => {
  return (
    <div>
      <p>詳細ページ</p>
      <div>
        {taskList.map((task, index) => (
          <div key={index}>
            <div>
              <span>
                {task.completed == false ? <p>{task.text}</p> : <p></p>}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
