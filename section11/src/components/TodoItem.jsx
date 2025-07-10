import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
	console.log(`고차컴포넌트 TotoItem ${id}`);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickBtn = () => {
    onDelete(id);
  };

  // const onupdate = (targetId) => {
  //   setTodos((prev) =>
  //     prev.map((item) =>
  //       item.id === targetId ? { ...item, isDone: !item.isDone } : item
  //     )
  //   );
  // };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickBtn}>삭제</button>
    </div>

  );
};
	/*고차 컴포넌트 HOC */
// export default memo(TodoItem, (prevProps, nextProps)=>{
// 	if(prevProps.id !== nextProps.id) return false;
// 	if(prevProps.isDone !== nextProps.isDone) return false;
// 	if(prevProps.content !== nextProps.content) return false;
// 	if(prevProps.date !== nextProps.date) return false;
// 	return true;

	export default memo(TodoItem, /*고차 컴포넌트 HOC */(prevProps, nextProps)=>{
		if(prevProps.id !== nextProps.id) return false;
		if(prevProps.isDone !== nextProps.isDone) return false;
		if(prevProps.content !== nextProps.content) return false;
		if(prevProps.date !== nextProps.date) return false;
		return true;
} );