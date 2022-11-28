import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { DeatilDisplay } from "../../src/components/DetilDisplay";
import { Title } from "../../src/components/Title";
import { Task } from "../todo";

export const Context = createContext<{
  state: number;
  setState: (val: number) => void;
}>({ state: 0, setState: () => {} });

export default function DetailPage() {
  const router = useRouter();
  const id = router.query.id as string;
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <>
      <Title />
      <DeatilDisplay></DeatilDisplay>
    </>
  );
}
