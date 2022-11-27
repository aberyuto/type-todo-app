import { createContext } from "react";
// import { TaskList } from "../TodoList";

export const TodoContext = createContext("");

export const TodoProvider = (props: { children: any }) => {
  const { children } = props;

  return (
    <TodoContext.Provider value={"asdfg"}>{children}</TodoContext.Provider>
  );
};
