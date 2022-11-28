import { Props } from "next/script";
import React from "react";
import { createContext } from "react";
import { Task } from "../../../pages/todo";
import { DeatilDisplay } from "../DetilDisplay";

type ContextType = {
  id: number;
  text: string;
  completed: boolean;
  setTaskList: (teskList: Task[]) => void;
};
export const TodoContext = createContext("");

const taskContext = React.createContext({} as ContextType);
const taskProvider = ({ taskList, setTaskList }: Props) => {
  <taskContext.Provider>
    <DeatilDisplay />
  </taskContext.Provider>;
};
