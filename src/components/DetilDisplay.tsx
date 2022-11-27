import { NextPage } from "next";
import React, { useContext } from "react";
import { Task } from "../../pages/todo";
import { taskContext } from "../../pages/todo";
type Props = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

export const DeatilDisplay: NextPage = () => {
  const { id, setTaskList } = useContext(taskContext);
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};
// export const DeatilDisplay = ({ taskList, setTaskList }: Props) => {
//   const objlist = taskList.map((r) => {
//     console.log(r.text);
//     return (
//       <div>
//         <li>{r.id}</li>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <p>詳細ページ</p>
//       <div>
//         {taskList.map((task, index) => (
//           <div key={index}>
//             <div>
//               <span>
//                 {task.completed == false ? (
//                   <label>
//                     {task.id}&nbsp;&nbsp;
//                     {task.text}
//                   </label>
//                 ) : (
//                   <p></p>
//                 )}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
