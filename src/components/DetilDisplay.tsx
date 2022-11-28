import { Component } from "react";
import type { AppProps } from "next/app";
import { TodoContext } from "./providers/TodoProvider";
import Link from "next/link";
import { Task } from "../../pages/todo";
import { Button } from "@mantine/core";

type Props = {
  task: Task;
};

export default function DeatilDisplay(props: Props) {
  return (
    <div>
      <h3>{props.task.text}</h3>
      <p>コンテンツの詳細</p>
      <p>内容</p>
      <br></br>
      <Button variant="outline" color="indigo">
        <Link href="/todo">戻る</Link>
      </Button>
    </div>
  );
}
