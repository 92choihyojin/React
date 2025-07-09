import './Editor.css';
import { useState } from 'react';

const Editor = ({onInsert})=>{
	const [content, setContent] = useState("");

	const onChangeInput = (e)=>{
		setContent(e.target.value);
	};
	const onSubmit = (e)=>{
		if(content === ''){
			window.alert('값을 입력하세요');
			inputRef.current.focus();
			return;
		}
		onInsert(content);
		setContent("");
	};
	const onKeyDown = (e)=>{
		if(e.keyCode === 13){
			onSubmit();
		}
	};

	return <div className="Editor">
		<input value={content} placeholder="새로운 Toto..." type='text' onChange={onChangeInput} onKeyDown={onkeydown}/>
		<button onClick={onSubmit}>추가</button>
	</div>
};

export default Editor;