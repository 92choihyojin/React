import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onupdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onupdate(id);
  };
  const onClickBtn = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickBtn}>삭제</button>
    </div>
  );
};
export default TodoItem;