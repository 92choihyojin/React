import "./App.css";
import UserDisplay from "./components/UserDisplay";
import UserInput from "./components/UserInput";
import { useState } from "react";

const mockData = [
  { name: "유저1", age: 24, gender: "여자", phone: "010-2732-2241" },
  { name: "유저2", age: 30, gender: "남자", phone: "010-3784-2834" },
  { name: "유저3", age: 34, gender: "남자", phone: "010-3784-2834" },
];


function App() {
	//상태관리
	const [userList, setUserList] = useState(mockData);
	const [selectedUser, setSelectedUser] = useState(null);

	//삽입
	const userInsert =(name,age,gender,phone)=>{
		const newUser = {name,age,gender,phone};
		setUserList([...userList, newUser]);
	};

	//수정
	const userUpdate = (name,age,gender,phone)=>{
		const updatedList = userList.map(
			(user) => { 
				return user === selectedUser ? { name, age, gender, phone } : user }
		);
		setUserList(updatedList);
		setSelectedUser(null);
	};
	//삭제
	const userDelete = (deleteUser) => {
  const filteredList = userList.filter((user) => user !== deleteUser);
  setUserList(filteredList);
  setSelectedUser(null);
};

	//선택된 유저 설정
	const handleUserSelect = (user)=> {
		if(selectedUser) {
			if(user==selectedUser) {
				setSelectedUser(null);
			} else {
				setSelectedUser(user);
			}
		} else {
			setSelectedUser(user);
		}
	};

  return (
    <>
      <div className="App">
        <UserDisplay
          userList={userList}
          onUserSelect={handleUserSelect}
          selectedUser={selectedUser}
        />
        <UserInput
          userInsert={userInsert}
          selectedUser={selectedUser}
          onUserUpdate={userUpdate}
          onUserDelete={userDelete}
        />
      </div>
    </>
  );
}

export default App;
