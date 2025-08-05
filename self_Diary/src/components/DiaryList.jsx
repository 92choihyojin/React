// import "../componentsStyle/DiaryList.css";
// // import DiaryItem from "./DiaryItem";
// import { useState, useMemo, useContext } from "react";
// // import { TodoStateContext } from "../App";

// const DiaryList = () => {
// 	const todos = [
//     { id: 1, content: "할 일 1", isDone: false, date: Date.now() },
//     { id: 2, content: "할 일 2", isDone: true, date: Date.now() },
//   ];

//   const [search, setSearch] = useState("");


	
//   const onChangeSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const getFilterData = () => {
//     if (search === "") {
//       return todos;
//     }
//     return todos.filter((todo) =>
//       todo.content.toLowerCase().includes(search.toLowerCase())
//     );
//   };

//   const filteredTodos = getFilterData();

//   const { totalCount, doneCount, notDoneCount } = useMemo(() => {
//     const totalCount = todos.length;
//     const doneCount = todos.filter((todo) => todo.isDone).length;
//     const notDoneCount = totalCount - doneCount;

//     return {
//       totalCount,
//       doneCount,
//       notDoneCount,
//     };
//   }, [todos]);

//   return (
//     <div className="List">
//       <div className="menu_bar">
//         <h4>Todo List</h4>
// 				<select>
// 					<option value="latest">최신순</option>
// 					<option value="oldest">오래된순</option>
// 				</select>
//         <div>
//           <div>total : {totalCount}</div>
//           <div>done : {doneCount}</div>
//           <div>notdone : {notDoneCount}</div>
//         </div>
//         <input
//           value={search}
//           onChange={onChangeSearch}
//           placeholder="검색어를 입력하세요"
//         />
//         <div className="todos_wrapper">
//           {filteredTodos.map((todo) => {
//             return <DiaryItem key={todo.id} {...todo} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiaryList;
