import "./App.css";
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import { useState , useRef } from "react";

const mockData = [
	{id:0, isDone:false, content:"React 공부하기", date:new Date().getTime()},
	{id: 1, isDone: false, content: "오라클 안할꺼야?", date: new Date().getTime()},
	{id: 2, isDone: false, content: "노래 연습하기", date: new Date().getTime()},
];

function App() {
	//상태관리(전체데이터관리)
	const [todos, setTodos] = useState(mockData);
	const idRef = useRef(3); // {curent: 3}


	//삽입하기
	const onInsert = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    //[newTodos]
    setTodos([newTodo, ...todos]);
  };
	//수정하기
	const onUpdate = (tagId)=>{
		setTodos(
			todos.map((data)=>{ return data.id === tagId ? {...data,isDone: !data.isDone}:data})
		);
	};

	//삭제하기
	const onDelete = (tagId)=>{
		setTodos(
			todos.filter((data)=>{
				return data.id !== tagId;
			})
		);
	};

  return (
    <>
		<div>
      <h1>오늘 할 일 앱 📚</h1>
			<Header/>
			<Editor onInsert={onInsert}/>
			<List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
		</div>
    </>
  );
}

export default App;
