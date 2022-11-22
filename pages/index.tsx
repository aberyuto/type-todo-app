import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Title}  from '../src/components/Title'
import {InputForm}  from "../src/components/inputForm";
import  {TodoList}  from "../src/components/TodoList";
import { useState } from "react";
import { BrowserRouter, Route,Link, Routes, useParams, useNavigate, useLocation } from 'react-router-dom';


export type Task={
  //オブジェクトの配列の作成
  id:number;text:string;completed:boolean
};


function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const navigation = useNavigate();

const useMovePage = () =>{
  navigation("/detailpages:",{state:2});
};
  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
      <button onClick={useMovePage}>ボタン</button>
    </div>
  );
}
const Detailpage = () => {
  const location = useLocation()
  const id = Number(location.state);

  return (
    <div>
      <h1>詳細ページ</h1>
    </div>
  );
}

const transition = () => {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/detailpages" element={<Detailpage />} />
      </Routes>
   </BrowserRouter>
  )
};

export default App;

