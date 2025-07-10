import "./App.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link, useNavigate} from "react-router-dom";

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
        <button onClick={() => {nav("/NEW");}}> NEW </button>
        <button onClick={() => {nav("/DIARY/2");}}> DIARY </button>
        <button onClick={() => {nav("/EDIT/3");}}> EDIT </button>
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
