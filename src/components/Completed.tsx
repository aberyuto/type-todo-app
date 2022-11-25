import React, { useState } from "react";
import { Task } from "../../pages/todo";
import Link from "next/link";

type Props={
    taskList: Task[],
    setTaskList:(taskList:Task[])=>void,
  }

  export const Completed = ({ taskList, setTaskList }: Props) => {
     
    const handleDelete = (id: number) => {
      //filter関数tureなら残す,falseなら除外
      setTaskList(taskList.filter((task) => task.id !== id));
    };

    const [flag, Setflag] = useState(false);
    const handleDetail = (id: number) => {
      Setflag(true);
    };

    return (
        <div>
          <div>
            {taskList.map((task, index) => (
              <div key={index}>
                    <div>     
                        <span>{task.completed == true ? (
                          <p>{task.text}
                      <div><button onClick={() => handleDelete(task.id)}>
                            削除
                          </button>
                          <button onClick={() => handleDetail(task.id)}>
                            <Link href="/todos/[Task.id]">詳細</Link>
                          </button>
                      </div>
                          </p>                          
                        ):(
                          <p></p>
                        )}</span>
                    </div>
            </div>
            ))}
          </div>
        </div>
      );
  };