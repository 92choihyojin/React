import "./App.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link } from "react-router-dom";

function App() {
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
        <a href="/">HOME</a>
        <a href="/new">NEW</a>
        <a href="/diary">DIARY</a>
        <a href="/edit">EDIT</a>
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
