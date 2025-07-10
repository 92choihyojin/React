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
        <Link to={"/diary"}>DIARY</Link>
        <Link to={"/edit"}>EDIT</Link>
      </div>
      <hr />
      <div className="App">
        <button onClick={onClickHome}> HOME </button>
        <button onClick={() => {nav("/NEW");}}> NEW </button>
        <button onClick={() => {nav("/DIARY");}}> DIARY </button>
        <button onClick={() => {nav("/EDIT");}}> EDIT </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
}

export default App;
