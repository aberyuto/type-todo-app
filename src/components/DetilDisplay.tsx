import { Component } from "react";
import type { AppProps } from "next/app";
import { TodoContext } from "./providers/TodoProvider";
import Link from "next/link";
import { Task } from "../../pages/todo";

type Props = {
  task: Task;
};
export default function DeatilDisplay(props: Props) {
  return (
    <div>
      <h3>詳細ページ</h3>
      <p>コンテンツの詳細</p>
      <p>内容</p>
      {props.task.text}
      <br></br>
      <button>
        <Link href="/todo">戻る</Link>
      </button>
    </div>
  );
}
