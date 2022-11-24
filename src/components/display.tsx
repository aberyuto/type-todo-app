import { Component } from "react";
import { Context } from "../../pages/_app";
import { TodoListContext } from "./TodoList";
import type { AppProps } from "next/app";

export default function Display({ Component, pageProps }: AppProps) {
  const Todo = TodoListContext(TodoListContext);

  return (
    <div>
      <p>コンテンツの内容</p>
      <Context.Provider value={{ state, setState }}></Context.Provider>
    </div>
  );
}
