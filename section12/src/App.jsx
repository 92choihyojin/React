import "./App.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link, useNavigate} from "react-router-dom";
import emotion1 from "./assets/emotion1.png";
import emotion2 from "./assets/emotion2.png";
import emotion3 from "./assets/emotion3.png";
import emotion4 from "./assets/emotion4.png";
import emotion5 from "./assets/emotion5.png";

function App() {
	const nav = useNavigate();
	const onClickHome = ()=>{
		nav('/');
	};

  return (
    <>
      <div className="App">
        <Link to={"/"}>HOME</Link>
        <Link to={"/new"}>NEW</Link>
        <Link to={"/diary/2"}>DIARY</Link>
        <Link to={"/edit/3"}>EDIT</Link>
      </div>
      <hr />
      <div className="App">
        <button onClick={onClickHome}> HOME </button>
        <button
          onClick={() => {
            nav("/NEW");
          }}
        >
          {" "}
          NEW{" "}
        </button>
        <button
          onClick={() => {
            nav("/DIARY/2");
          }}
        >
          {" "}
          DIARY{" "}
        </button>
        <button
          onClick={() => {
            nav("/EDIT/3");
          }}
        >
          {" "}
          EDIT{" "}
        </button>
      </div>
      <hr />
      <div className="App">
        public에서 이미지 첨부
        <img src="emotion11.png" alt="" />
        <img src="emotion12.png" alt="" />
        <img src="emotion13.png" alt="" />
        <img src="emotion14.png" alt="" />
        <img src="emotion15.png" alt="" />
      </div>
      <hr />
      <div className="App">
				import를 활용해 이미지 첨부
        <img src={emotion1} alt="" />
        <img src={emotion2} alt="" />
        <img src={emotion3} alt="" />
        <img src={emotion4} alt="" />
        <img src={emotion5} alt="" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new/*" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
}

export default App;
