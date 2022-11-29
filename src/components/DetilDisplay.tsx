import { Component, FormEvent, FormEventHandler, useState } from "react";
import Link from "next/link";
import { Task } from "../../pages/todo";
import { Button } from "@mantine/core";
import { Input } from "@mantine/core";

type TaskDetail_props = {
  task: Task;
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

export type DetailList = {
  item: string;
};

const array: string[] = [];

export default function DeatilDisplay({
  task,
  taskList,
  setTaskList,
}: TaskDetail_props) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: any) => {
    setInputText(e.target.value);
  };
  const [detailList, setDetailList] = useState<DetailList[]>([]);

  const addList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDetailList([...detailList, { item: inputText }]);

    console.log(detailList);
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   //console.log();
  //   if (inputText != "") {
  //     setTaskList([
  //       //第一引数に最初のオブジェクトの情報
  //       //第二引数にオブジェクト
  //       ...taskList,
  //       {
  //         ...task,
  //         detailList: { item: inputText },
  //       },
  //     ]);
  //   }
  //   setInputText("");
  // };

  const handleItem = (e: any) => {
    e.preventDefault();
    // setTaskList([...taskList, { ...task }]);
    array?.push(inputText);

    setInputText("");
    {
      console.log(array[0]);
    }
  };

  const backbutton = () => {
    setTaskList([...taskList, { ...task, item: array }]);
  };

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
      {detailList.map((detailList, index) => (
        <li key={index}>{detailList.item}</li>
      ))}
      {array?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

      <p>内容</p>
      <br></br>
      <Button variant="outline" color="indigo" onClick={backbutton}>
        <Link href="/todo">戻る</Link>
      </Button>
    </div>
  );
}
