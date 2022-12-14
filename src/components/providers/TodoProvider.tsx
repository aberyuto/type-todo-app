import { createContext } from "react";

export const TodoContext = createContext({});

export const TodoProvider = (props: { children: any }) => {
  const { children } = props;

  const sampleobj = { SampleValue: "ใในใ" };

  return (
    <TodoContext.Provider value={sampleobj}>{children}</TodoContext.Provider>
  );
};
