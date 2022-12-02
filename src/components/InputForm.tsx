import React, { FormEvent, useState } from "react";
import { Button } from "@mantine/core";
import { Input } from "@mantine/core";
import { Task } from "../../pages/todo";

type Props = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

export const InputForm = ({ taskList, setTaskList }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputText != "") {
      setTaskList([
        //第一引数に最初のオブジェクトの情報
        //第二引数にオブジェクト
        ...taskList,
        {
          id: taskList.length,
          text: inputText,
          completed: false,
          item: [],
        },
      ]);
    }
    setInputText("");
  };
  const handleChange = (e: any) => {
    setInputText(e.target.value);
  };

  function Demo() {
    return <Input placeholder="Your email" radius="xl" size="lg" />;
  }

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="追加するタスクを入力..."
          radius="xl"
          size="lg"
          type="text"
          onChange={handleChange}
          value={inputText}
        />
        <Button onClick={handleSubmit} variant="outline" radius="xl" size="lg">
          追加
        </Button>
      </form>
    </div>
  );
};
