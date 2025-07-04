import { useState } from "react";

//사용자가 만든 Hooks (custom Hooks)커스텀훅
function useMyInput() {
 const [input, setInput] = useState("");

 const onChangeInput = (e)=> {
		setInput(e.target.value);
 };
 	return [import,onChangeInput]
}

export default useMyInput;
