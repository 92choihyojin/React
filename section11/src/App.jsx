import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useRef, useReducer } from "react";
import Exam from "./components/Exam";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
} from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "오라클 안할꺼야?",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(todos, action) {
  switch (action.type) {

    case "INSERT": return [action.data, ...todos];
		
    case "UPDATE": return todos.map((data)=>{
				return data.id === action.tagId ? {...data, isDone : !data.isDone} : data });

    case "DELETE": return todos.filter((data)=>{
			return data.id !== action.tagId;
		}) ;
    default: return todos;
  }
}

//1. createContext() 생성해ㅐ서 export 시킨다.(context : 자바 (static 유사함), 공동으로 사용되는 것)

function App() {
  //상태관리(전체데이터관리)
  //const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // {curent: 3}

  // 삽입하기
	//useCallback 해당되는 이벤트 핸들러함수를 딱 1번만 작동시킴
	const onInsert = useCallback((content) => {
		dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
	}, []);
	// const onInsert = (content) => {
		// dispatch({
    //   type : "INSERT",
    //   data : {
    //     id: idRef.current++,
    //     isDone: false,
    //     content: content,
    //     date: new Date().getTime(),
    //   },
    // });
    //const newTodo = { id: idRef.current++, isDone: false, content: content,  date: new Date().getTime(), };
    //[newTodos]
  	//setTodos([newTodo, ...todos]);
  //};

  // 수정하기
	const onUpdate = useCallback((tagId)=>{
		dispatch({
      type: "UPDATE",
      tagId: tagId,
    });
	},[]);

  //const onUpdate = (tagId) => {
		// dispatch({
    //   type : "UPDATE",
    //   tagId : tagId,
    // });
    // setTodos(
    //   todos.map((data) => {
    //     return data.id === tagId ? { ...data, isDone: !data.isDone } : data;
    // })
    //);
  //};

  //삭제하기
	const onDelete = useCallback((tagId)=>{
		dispatch({
      type : "DELETE",
      tagId : tagId,
    });
	},[])

  // const onDelete = (tagId) => {
	// 	dispatch({
  //     type : "DELETE",
  //     tagId : tagId,
  //   });
    // setTodos(
    //   todos.filter((data) => {
    //     return data.id !== tagId;
    //   })
    // );
  //};

  return (
   
      <div>
        <Header />
        <Exam />
        <Editor onInsert={onInsert} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
   
  );
}

export default App;
