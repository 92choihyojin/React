import "./App.css";
import { Routes, Route, Link, } from "react-router-dom";
import { useReducer, useRef } from "react";
import { DiaryStateContext, DiaryDispatchContext } from "./util/contexts";
import AuthContext from "./components/AuthContext";
import Home from "./page/Home";
import Diary from "./page/Diary";
import New from "./page/New";
import Edit from "./page/Edit";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import KakaoLoginComponent from "./components/KakaoLoginComponent";
import KakaoRedirectPage from "./page/KakaoRedirectPage";


// 날짜 형식 함수 추가
const getTodayString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()-1).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "월급을 받았어요",
    createdDate: getTodayString(),
    emotionId: 1,
  },
  {
    id: 1,
    isDone: true,
    content: "일을 하다가 직원이 다쳤어요",
    createdDate: getTodayString(),
    emotionId: 5,
  },
  {
    id: 2,
    isDone: false,
    content: "3번 업무 내용...",
    createdDate: getTodayString(),
    emotionId: 1,
  },
];

// reducer 함수
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) => {
				console.log(item);console.log(action.data);
        return item.id === action.data.id ? action.data : item;
			});
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const initialAuthState = { user: null };

//로그인 함수
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload.username };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
}


function App() {
  //상태관리
  const [data, dispatchDiary] = useReducer(reducer, mockData);
	
	//로그인 상태
	const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState);

  const idRef = useRef(
    mockData.sort((a, b) => {
      return a.id < b.id ? 1 : -1;
    })[0].id + 1
  );

  
	
  //const location = useLocation(); // 현재 경로 확인

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ생성, 수정, 삭제ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  // 새로운 일기 추가
  const onCreate = (diaryData) => {
    console.log(diaryData);
    dispatchDiary({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        ...diaryData,
      },
    });
  };
  // 기존 일기 수정
  const onUpdate = ({id, createdDate, emotionId, content, status}) => {
    dispatchDiary({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
        status,
      },
    });
  };
  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatchDiary({
      type: "DELETE",
      id,
    });
  };
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//


  return (
    <AuthContext.Provider value={{ authState, dispatchAuth }}>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="Menu">
            <a href="/">임시 홈 </a>
            <KakaoLoginComponent />
            <a href="/Login">로그아웃</a>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/New" element={<New />} />
            <Route path="/Diary" element={<Diary data={data} />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login/Kakao" element={<KakaoRedirectPage />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;