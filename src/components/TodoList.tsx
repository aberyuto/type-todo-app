import Link from "next/link";

import React, { useContext, useState } from "react";

import DeatilDisplay from "./DetilDisplay";

import { Context } from "../../pages/todos/[id]";

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

  const [flag, Setflag] = useState(false);

  const { state, setState } = useContext(Context);

  const handleDetail = (id: number) => {
    Setflag(true);
  };

  const handleCompleted = (id: number) => {
    
    const comp = [...taskList];
    setTaskList(
      comp.map((task) => {
        if (id === task.id) {
          task.completed = !task.completed;
          if(task.completed === true){
            setTaskList(taskList.filter((task: Task) => task.completed !== true));
          }   
        } 
        return task;
      })
   );
   
    /*setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {     
            ...task,
            //trueからfalseに変換
            completed: !task.completed,     
        };
        }
        
        return task;
      })
   );*/
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
              <span>{task.completed == false ? (
                          <p>{task.text}
                      <div><button onClick={() => handleCompleted(task.id)}>
                            完了
                          </button>
                          <button onClick={() => handleDelete(task.id)}>
                            削除
                          </button>
                          <button onClick={() => handleDetail(task.id)}>
                            <Link href="/todos/[Task.id]">詳細</Link>
                          </button>
                      </div>
                          </p>):(
                            <p></p>
                          )}
              </span>
            </div>
            <div className="icons">
            </div>
            {/* <div style={{ visibility: flag ? "visible" : "hidden" }}>
              <DeatilDisplay />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
