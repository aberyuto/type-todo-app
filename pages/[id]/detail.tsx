import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import type { AppProps } from "next/app";
import Link from "next/link";
import DeatilDisplay from "../../src/components/DetilDisplay";
import { Title } from "../../src/components/Title";
import { TodosContext } from "../_app";

export const Context = createContext<{
  state: number;
  setState: (val: number) => void;
}>({ state: 0, setState: () => {} });

export default function DetailPage({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const id = router.query.id as string;
  const [state, setState] = useState(0);
  const { taskList } = useContext(TodosContext);

  console.log(taskList);

  const task = taskList.find((task) => {
    return task.id.toString() === id;
  });

  return (
    <>
      <Title />
      {task && <DeatilDisplay task={task} />}
      {/* <DeatilDisplay task={task} /> */}
    </>
  );
}
