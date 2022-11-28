import { NextPage } from "next";
import React, { useContext } from "react";
import { Task } from "../../pages/todo";
type Props = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

// export const DeatilDisplay: NextPage = () => {
//   const { id, setTaskList } = useContext(taskContext);
//   return (
//     <div>
//       <p>{id}</p>
//     </div>
//   );
// };
export const DeatilDisplay = ({ taskList, setTaskList }: Props) => {
  const contaierStyle = {
    border: "solid 2px #329eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
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
    <div>
      <div>
        {taskList.map((task, index) => (
          <div>
            <span>
              {task.detail == true ? (
                <li style={contaierStyle}>
                  <h1>
                    ID:
                    {task.id}&nbsp;&nbsp; 見出し:
                    {task.text}&nbsp;&nbsp;
                  </h1>
                  <h3>
                    詳細:
                    {task.text}&nbsp;&nbsp;
                    <button onClick={() => handleDetail(task.id)}>
                      閉じる
                    </button>
                  </h3>
                </li>
              ) : (
                <p></p>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
