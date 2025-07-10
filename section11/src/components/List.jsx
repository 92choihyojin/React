import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
import React from "react";
import { useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChaneInput = (e) => {
    setSearch(e.target.value);
  };

  const getFilterTodos = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((data) =>
      data.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterTodos = getFilterTodos();

  //랜더링이 일어날때마다, todo 전체갯수, todo isDone=tru 완료된개수, todo isDone=false 완료되지 개수
  //getAnalyzeData 최적화할거야 => useMemo(()=>{}, [todos])  useEffect(()=>{},[])
  //useEffect(()=>{},[]), useEffect(()=>{},[todos]), useEffect(()=>{}), useEffect(()=>{  return ()=>{}},[])

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    //console.log("useMemo 최적화 되고 있어요");
    const totalCount = todos.length;
    //const doneTodos = todos.filter((data)=>{return data.isDone === true});
    const doneCount = todos.filter((data) => {
      return data.isDone === true;
    }).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List </h4>
      <div>
        <p>totalCount : {totalCount}</p>
        <p>doneCount: {doneCount}</p>
        <p>notDoneCount : {notDoneCount}</p>
      </div>
      <input
        value={search}
        placeholder="검색어를 입력하세요"
        onChange={onChaneInput}
      />
      <div className="list_wrapper">
        {filterTodos.map((data) => {
          return (
            <TodoItem
              key={data.id}
              {...data}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
