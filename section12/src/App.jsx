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
      <div>
        <h1>Header</h1>
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
