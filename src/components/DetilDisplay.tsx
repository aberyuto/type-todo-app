import { Component, FormEvent, FormEventHandler, useState } from "react";
import Link from "next/link";
import { Task } from "../../pages/todo";
import { Button } from "@mantine/core";
import { Input } from "@mantine/core";
import { useContext } from "react";

import { SimpleDatePicker } from "./Calendar";
import { DateContext } from "../../pages/_app";

type TaskDetail_props = {
  task: Task;
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

export type DetailList = {
  item: string;
};

let array: string[] = [];

export default function DeatilDisplay({
  task,
  taskList,
  setTaskList,
}: TaskDetail_props) {
  const [inputText, setInputText] = useState("");

  array = task.item;

  const handleChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setTaskList([...taskList, { ...task }]);
    array.push(inputText);
    const newTaskList = taskList.map((t) => {
      if (t.id === task.id) {
        return { ...task, item: array };
      }
      return t;
    });
    setTaskList(newTaskList);

    setInputText("");
    {
      console.log(array);
    }
  };

  const backbutton = () => {
    array = task.item;
  };

  const { startDate, setStartDate } = useContext(DateContext);

  return (
    <div>
      <h3>{task.text}</h3>
      <form onSubmit={handleItem}>
        <Input
          placeholder="詳細の追加"
          radius="lg"
          onChange={handleChange}
          value={inputText}
        />
      </form>

      <p>コンテンツの詳細</p>

      {array?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

      <p>内容</p>
      <SimpleDatePicker startDate={startDate} setStartDate={setStartDate} />
      <br></br>
      <Button variant="outline" color="indigo" onClick={backbutton}>
        <Link href="/todo">戻る</Link>
      </Button>
    </div>
  );
}
