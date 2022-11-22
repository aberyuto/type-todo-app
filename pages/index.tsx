import {Title}  from '../src/components/Title';
import {InputForm}  from "../src/components/InputForm";
import  {TodoList}  from "../src/components/TodoList";
import { useState } from "react";
import { BrowserRouter, Route,Routes, useNavigate, useLocation } from 'react-router-dom';


export type Task={
  //オブジェクトの配列の作成
  id:number;text:string;completed:boolean
};



const  Home = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const navigation = useNavigate();

const useMovePage = () =>{
  navigation("/Detailpage:",{state:2});
}

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

const  App = () => {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Detailpage" element={<Detailpage />} />
      </Routes>
   </BrowserRouter>
  )
};

export default App;

