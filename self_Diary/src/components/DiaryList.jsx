import DiaryItem from "./DiaryItem";
import { useState, useMemo, useContext } from "react";
import { TodoContext } from "../App";


const DiaryList = () => {
	const {todos} = useContext(TodoContext);
	const [search,setSearch] = useState("");

	const onChangeSearch = (e) => {
		setSearch(e.target.value);
	};

	const getFilterData = () =>{
		if (search === ""){
			return todos;
		}
		return todos.filter((todo) =>
		todo.content.toLowerCase().includes(search.toLowerCase())
		);
	};

	const filteredTodos = getFilterData();


	const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
		const totalCount = todos.length;
		const doneCount = todos.filter((todo) => todo.isDone).length;
		const notDoneCount = totalCount - doneCount;

		return{
			totalCount,
			doneCount,
			notDoneCount,
		};
	},[todos]);


	return (
		<div className="List">
			<h4>Todo List</h4>
			<div>
				<div>total : {totalCount}</div>
				<div>done : {doneCount}</div>
				<div>notdone : {notDoneCount}</div>
		</div>
			<input
				value={search}
				onChange={onChangeSearch}
				placeholder="검색어를 입력하세요"
			/>
			<div className="todos_wrapper">
				{filteredTodos.map((todo)=>{
					return <DiaryItem key={todo.id}{...todo}/>;
				})}
			</div>
		</div>
	);
};

export default DiaryList;
