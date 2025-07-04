import { useState } from "react";

//값을 입력해서 화면서 보여야되는곳은 useState
//값이 계속해서유지되는것도 useState
//상태값이 변동되면 화면이 다시 렌더링 하는것도 useState

function Register() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  //상태값 (리랜더링 발생안됨), 객체참조
  const countRef = useRef(0); //const countRef = {current:0} 으로 되어있음
  const inputRef = useRef(0); //const countRef = {current:undefined} 으로 되어있음

	//input 변경 이벤트핸들러
  const onChangeMember = (e) => {
		countRef.current++;
    setInput({ ...input, [e.target.name]: e.target.value });
  }
	//submit 클릭 이벤트핸들러
	const onSubmit = (e)=>{
		if(nameRef.current.value ==="") {
			alert("이름영역 값 입력바람");
			nameRef.current.focus();
		} else{
			alert("자료전송");
		}
	}


  return (
    <div>
      <h6>이벤트가 발생되는 회수{countRef.current}</h6>
      <div>
        <input
          value={input.name}
          name={"name"}
          onChange={onChangeMember}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          value={input.birth}
          birth={"birth"}
          onChange={onChangeMember}
          type="date"
        />
      </div>
      <div>
        <select
          value={input.country}
          country={"country"}
          onChange={onChangeMember}
        >
          <option value="">선택</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        <div>선택된 국가: {input.country}</div>
      </div>
      <div>
        <textarea
          value={input.bio}
          bio={"bio"}
          onChange={onChangeMember}
        />
      </div>
    </div>
  );
}

export default Register;
