import "./UserInput.css";
import { useEffect, useState } from "react";

const UserInput = ({userInsert, selectedUser, onUserUpdate, onUserDelete }) => {
  //상태관리
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
	const [currUser, setCurrUser] = useState(selectedUser);
	const [isChanged, setChanged] = useState(false);

  // 선택된 유저가 바뀌면 input에 값을 채움
  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setAge(selectedUser.age);
      setGender(selectedUser.gender);
      setPhone(selectedUser.phone);
			setCurrUser(selectedUser);
    } else {
      // 선택이 해제 되면 input 값 초기화
      resetForm();
    }
  }, [selectedUser]);

	useEffect(()=>{}, []);

  // 입력값 초기화
  const resetForm = () => {
    setName("");
    setAge("");
    setGender("");
    setPhone("");
  };

  // 입력 이벤트처리
  const onChangeName = (e) => {
    setName(e.target.value);
		if(currUser.name != e.target.value) {
			setChanged(true);
		} else {
			setChanged(false);
		}
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
		if (currUser.age != e.target.value) {
      setChanged(true);
    } else {
      setChanged(false);
    }
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
		if (currUser.gender != e.target.value) {
      setChanged(true);
    } else {
      setChanged(false);
    }
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
		if (currUser.phone != e.target.value) {
      setChanged(true);
    } else {
      setChanged(false);
    }
  };

	// 회원등록
  const onClickRegister = () => {
		if(!name||!age||!gender||!phone) {
			alert("값을 입력해주세요.");
			return;
		}
		userInsert(name, age, gender, phone);
    resetForm();
  };

  // 회원 수정
  const onClickUpdate = () => {
    if (!selectedUser) return;
		if (!name || !age || !gender || !phone) {
      alert("변경할 값을 입력해주세요.");
      return;
    }
		if (!isChanged) {
			alert("변경된 값이 없습니다.");
			return;
    }

    onUserUpdate(name, age, gender, phone);
    resetForm();
  };

  // 회원 삭제
  const onClickDelete = () => {
    if (!selectedUser) return;
		onUserDelete(selectedUser);
    resetForm();
  };

  return (
    <div className="UserInput">
      <h3>회원 정보 등록</h3>
      <hr/>
      <div className="input_wrap">
        <label>{"이름"}</label>
        <input
          type="text"
          value={name}
          placeholder="이 름"
          onChange={onChangeName}
        />
      </div>
      <div className="input_wrap">
        <label>{"나이"}</label>
        <input
          type="text"
          value={age}
          placeholder="나 이"
          onChange={onChangeAge}
        />
      </div>
      <div className="input_wrap">
        <label>{"성별"}</label>
        <input
          type="text"
          value={gender}
          placeholder="성 별"
          onChange={onChangeGender}
        />
      </div>
      <div className="input_wrap">
        <label>{"전화번호"}</label>
        <input
          type="text"
          value={phone}
          placeholder="전화번호"
          onChange={onChangePhone}
        />
      </div>
      <div className="button_wrap">
        <button onClick={onClickRegister}>회원등록</button>
        {selectedUser && (
          <>
            <button onClick={onClickUpdate}>회원수정</button>
            <button onClick={onClickDelete}>회원삭제</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserInput;
