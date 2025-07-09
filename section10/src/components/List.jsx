import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
import React from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeInput = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredTodos = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((data) =>
      data.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredTodos();

	//랜더링이 발생할때마다, togo 전체갯수, todo isDone=tru 완료된 개수, todo isDone=false 완료되지 않은 개수
	const getAnalyzeData = () =>{
		const totalCount = todos.length;
		// const doneTodos = todos.filter((data)=>{return data.isDone === true});
		const doneCount = todos.filter((data)=>{return data.isDone === true}).length;
		const notDoneCount = totalCount - doneCount;
		return {totalCount, doneCount, notDoneCount}

	};
	const {totalCount,doneCount,notDoneCount} = getAnalyzeData()



  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>
        <p>totalCount : {totalCount}</p>
        <p>doneCount : {doneCount}</p>
        <p>notDoneCount : {notDoneCount}</p>
      </div>
      <input
        value={search}
        placeholder="검색어를 입력하세요"
        onChange={onChangeInput}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((data) => (
          <TodoItem
            key={data.id}
            {...data}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
