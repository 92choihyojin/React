import { useState, React } from "react";
import { Button, Container, Form } from "react-bootstrap";
import useCustomMove from "../../hooks/useCustomMove";
import { postAdd } from "../../api/TodoApi";
import InfoModal from "../common/InfoModal";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};
const AddComponent = () => {
  const [todo, setTodo] = useState({ ...initState });
  const [result, setResult] = useState(null);
  const { moveToList } = useCustomMove();
  const [infoModalOn, setInfoModalOn] = useState(false);

	//변경되는 input값을 useState 적용시킨것
  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };
  const handleClickAdd = () => {
    postAdd(todo)
      .then((result) => {
        console.log(result);
        setResult(result.TNO);
        setInfoModalOn(true);
        setTodo({ ...initState }); // 초기화
      })
      .catch((e) => {
        console.error(e);
      });
    console.log(todo);
  };

  const closeModal = () => {
    setInfoModalOn(false);
    moveToList();
  };

  return (
    <Container className="p-5">
      <InfoModal
        show={infoModalOn}
        onHide={() => setInfoModalOn(false)}
        title={`ADD RESULT`}
        content={`New ${result} Added`}
        callbackFn={() => closeModal()}
      />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>TITLE</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={todo.title}
            onChange={handleChangeTodo}
            placeholder="Enter Title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>WRITER</Form.Label>
          <Form.Control
            name="writer"
            type="text"
            value={todo.writer}
            onChange={handleChangeTodo}
            placeholder="Enter Writer"
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>DUEDATE</Form.Label>
          <Form.Control
            name="dueDate"
            type="date"
            value={todo.dueDate}
            onChange={handleChangeTodo}
            placeholder="Enter dueDate"
          />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center gap-2 ">
        <Button variant="primary" type="button" onClick={handleClickAdd}>
          저장
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            moveToList({ page: 1 });
          }}
        >
          목록
        </Button>
      </div>
    </Container>
  );
};

export default AddComponent;
