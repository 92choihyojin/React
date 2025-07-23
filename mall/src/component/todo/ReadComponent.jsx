import { useEffect, useState, useRef } from "react";
import { getOne } from "../../api/TodoApi";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";


const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

const ReadComponent = ({ tno, moveToModify, moveToList  }) => {
  const [todo, setTodo] = useState(initState);

  useEffect(() => {
    getOne(tno).then((data) => {
      setTodo(data);
    });
  }, [tno]);

  return (
    <>
      <div className="border-2 border-sky-200 mt-10 m-2 p-4 ">
        {makeDiv("Tno", todo.tno)}
        {makeDiv("Writer", todo.writer)}
        {makeDiv("Title", todo.title)}
        {makeDiv("Due Date", todo.dueDate)}
        {makeDiv("Complete", todo.complete ? "Completed" : "Not Yet")}
      </div>
      <div className="d-flex justify-content-center gap-2 mt-5">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => {
             moveToModify(tno);
          }}
        >
          수정하기
        </button>
        <button
          className="btn btn-primary"
          type="text"
          onClick={() => {
            moveToList();
          }}
        >
          목록가기
        </button>
      </div>
    </>
  );
};

const makeDiv = (title, value) => (
  <div className="flex justify-center">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <div className="w-1/5 p-6 text-right font-bold">{title}</div>
      <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
        {value}
      </div>
    </div>
  </div>
);

export default ReadComponent;
