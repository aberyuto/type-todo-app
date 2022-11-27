import { createContext } from "react";
import { Task } from "../../../pages/todo";
// import { TaskList } from "../TodoList";

export const TodoContext = createContext("");

export const TodoProvider = ({ taskList, setTaskList }) => {
  return <TodoContext.Provider value={}>{children}</TodoContext.Provider>;
};
