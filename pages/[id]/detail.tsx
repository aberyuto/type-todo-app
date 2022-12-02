import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import DeatilDisplay from "../../src/components/DetilDisplay";
import { Title } from "../../src/components/Title";
import { DetailContext, TodosContext } from "../_app";

export default function DetailPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const { taskList, setTaskList } = useContext(TodosContext);
  const { detailList } = useContext(DetailContext);

  const task = taskList.find((task) => {
    return task.id.toString() === id;
  });

  return (
    <>
      <Title />
      {task && (
        <DeatilDisplay
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      )}
      {console.log(detailList)}
      {/* <DeatilDisplay task={task} /> */}
    </>
  );
}
