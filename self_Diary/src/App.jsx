import "./App.css";
import React from "react";
import { useReducer, useRef, useCallback, useMemo, createContext } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Editor from "./components/Editor";
import DiaryItem from "./components/DiaryItem";
import DiaryList from "./components/DiaryList";
//import AuthContext, { AuthProvider } from "./contexts/AuthContext";

//import { Routes, Route, Link, useNavigate } from "react-router-dom";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
    isDone: false,
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
    isDone: true,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );

    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const TodoContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 입력
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
        emotionId: 3,
      },
    });
  }, []);

  // 수정
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);
  // 삭제
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizeDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div>
      <Header
        title={"Header"}
        Header_L={<Button text={"Left"} />} //왼쪽
        Header_M={"Header"} //중앙
        Header_R={<Button text={"Right"} />} //오른쪽
      />
      <TodoContext value={{ onCreate, onUpdate, onDelete }}>
        <TodoDispatchContext.Provider value={memoizeDispatch}>
          <Editor />
					<DiaryList/>
        </TodoDispatchContext.Provider>
      </TodoContext>
      <Button
        text={"새일기 쓰기"}
        onClick={() => onCreate("새 일기 내용 입력")}
        type={"POSITIVE"}
      />{" "}
      <Button text={"수정"} onClick={() => {}} type={"GREEN"} />
      <Button text={"삭제"} onClick={() => {}} type={"NEGATIVE"} />
      <hr />
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            style={{ borderBottom: "1px solid #ccc", padding: "1rem 0" }}
          >
            <div>📝 {item.content}</div>
            <div>🕒 {new Date(item.createdDate).toLocaleString()}</div>
            <div>😊 감정 ID: {item.emotionId}</div>

            <div style={{ marginTop: "1rem", display: "flex" }}>
              <Button
                text="수정"
                type="GREEN"
                onClick={() =>
                  onUpdate({
                    ...item,
                    content: item.content + " (수정됨)",
                  })
                }
              />
              <Button
                text="삭제"
                type="NEGATIVE"
                onClick={() => onDelete(item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
