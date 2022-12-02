import React, { useState } from "react";
import { Button } from "@mantine/core";
import { Input } from "@mantine/core";
import { Task } from "../../pages/todo";

type Props = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
};

// type Props2 = {
//   submitdate: DateList[];
//   setSubmitDate: (date: DateList[]) => void;
// };

export const InputForm = ({ taskList, setTaskList }: Props) =>
  // { submitdate, setSubmitDate }: Props2
  {
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e: any) => {
      e.preventDefault();
      //console.log();
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

    // const handleDate = (e: any) => {
    //   e.preventDefault();
    //   setDate([
    //     ...date,
    //     {
    //       id: date.length,
    //       date: e.taget.value,
    //     },
    //   ]);
    // };

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
          <Button
            onClick={handleSubmit}
            variant="outline"
            radius="xl"
            size="lg"
          >
            追加
          </Button>
        </form>
      </div>
    );
  };

//   return (
//     <div className="inputForm">
//       <form onSubmit={handleSubmit}>
//         <Input
//           placeholder="追加するタスクを入力..."
//           radius="xl"
//           size="lg"
//           type="text"
//           onChange={handleChange}
//           value={inputText}
//         />

//         <Button variant="outline" radius="xl" size="lg">
//           追加
//         </Button>
//       </form>
//     </div>
//   );
// };
