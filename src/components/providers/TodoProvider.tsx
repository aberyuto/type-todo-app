import { createContext } from "react";

export const TodoContext = createContext({});

export const TodoProvider = (props: { children: any }) => {
  const { children } = props;

  const sampleobj = { SampleValue: "テスト" };

  return (
    <TodoContext.Provider value={sampleobj}>{children}</TodoContext.Provider>
  );
};
