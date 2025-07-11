import "./App.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link, useNavigate} from "react-router-dom";
import Button from './components/Button';
import Header from "./components/Header";

function App() {

  return (
    <>
      <div className="App">
        <Header
          title="리액트홈페이지"
          leftChild={<Button text="<" />}
          rightChild={<Button text=">" />}
        />
      </div>

      <div className="App">
        <Button
          text={"시작하기"}
          type={"POSITIVE"}
          onClick={() => {
            alert("시작하기");
          }}
        />
        <Button
          text={"정지하기"}
          type={"NEGATIVE"}
          onClick={() => {
            alert("정지하기");
          }}
        />
        <Button
          text={"홈으로가기"}
          type={"HOME"}
          onClick={() => {
            alert("홈으로가기");
          }}
        />
      </div>

      <hr />

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
