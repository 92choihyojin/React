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

  return (
    <div className="List">
      <h4>Todo List</h4>
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
