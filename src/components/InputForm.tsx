import React, { useState } from "react";
import { Task } from "../../pages";

type Props={
  taskList:Task[],
  setTaskList:(teskList:Task[])=>void
}


export const InputForm = ({ taskList, setTaskList }:Props) => {
  const [inputText, setInputText] = useState("");

  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    //console.log();
    setTaskList([
      //第一引数に最初のオブジェクトの情報
      //第二引数にオブジェクト
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e:any) => {
    setInputText(e.target.value);
  };
  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
        追加
        </button>
      </form>
    </div>
  );
};