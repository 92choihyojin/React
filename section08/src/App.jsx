import "./App.css";
import { useState } from "react";
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import { useState } from "react";

const mockData = [
	{
		id:0,
		isDone:false,
		content:"React 공부하기",
		date:new Date().getTime(),
	},
	{
		id: 1,
		isDone: false,
		content: "빨래하기",
		date: new Date().getTime(),
		},
		{
		id: 2,
		isDone: false,
		content: "노래 연습하기",
		date: new Date().getTime(),
		},
];
function App() {
 

  return (
    <>
		<div>
      <h1>오늘 할 일 앱 📚</h1>
			<Header/>
			<Editor/>
			<List/>
		</div>
    </>
  );
}

export default App;
