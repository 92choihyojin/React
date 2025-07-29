import "../componentsStyle/Editor.css";
import { useRef, useState, useContext } from "react";
import { TodoContext } from "../App";

const Editor = () => {
	const { onCreate } = useContext(TodoContext);
	const [ content,setContent ] = useState("");
	const inputRef = useRef();

	// 입력될때마다 상태를 업데이트
	const onChangeContent=(e)=>{
		setContent(e.target.value);
	};

	// 키보드를 누를때 발생하는 이벤트 처리
	// keyCode 13 은 Enter키를 의미
	const onKeyDown =(e)=>{
		if(e.key ==="Enter"){
			onSubmit();
		};
	}

	// 빈 문자열이면 함수종료
	const onSubmit =()=>{
		if(content ===""){
			inputRef.current.focus();
			return;
		}
		onCreate(content);
		setContent("");
	};

	return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="검색"
      />
      <button onClick={onSubmit}>추가하기</button>
    </div>
  );

};
export default Editor;
