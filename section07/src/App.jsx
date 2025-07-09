import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";
import Even from "./components/Even";


function App() {
	//상태값 변화
	const [count, setCount] = useState(0);
	const [input, setInput] = useState("");
	//마운트 , count 변화가 있을때마다 자동으로 작동 \\ 모든 State가 변화있을때 작동 (App 생성되었을때 자동으로 실행하는 기능 : 데이터베이스)
	useEffect(()=>{
		//여기에다 우리가 마운트 될때 하고 싶은것을 처리하면된다.
		console.log(`mount count = ${count} input${input}`);
	},[count,input]);

	//이벤트 핸들러처리
  const onClickButton = (value) => {
    setCount(count + value);
  };

	const onChangeInput = (e)=>{
		setInput(e.target.value)
	};

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} name={"phone"} onChange={onChangeInput} type="text" />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}
export default App;
