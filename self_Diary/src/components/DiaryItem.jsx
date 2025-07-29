import "../componentsStyle/DiaryItem.css";
import { memo, useContext } from "react";
import { TodoContext } from "../App";


const DiaryItem = ({id, isDone, content, date}) => {
	const { onUpdate, onDelete } = useContext(TodoContext);

	const onChangeCheckBox =()=>{
		onUpdate(id);
	};

	const onClickDeleteButton = ()=>{
		onDelete(id);
	};

  return (
		<div className="TodoItem">
			<input
				onChange={onChangeCheckBox}
				readOnly
				checked={isDone}
				type="checkbox"
			/>
			<div className="content">{content}</div>
			<div className="date">{new Date(date).toLocaleDateString()}</div>
			<button onClick={onClickDeleteButton}>삭제</button>
		</div>
	);
};


export default memo(DiaryItem);
