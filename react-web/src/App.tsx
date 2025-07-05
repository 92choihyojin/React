import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import { hostURL } from './utils/common'

function App() {
  const [count, setCount] = useState(0);
	const [user, setUser] = useState([{}]);

	const fetchUserList = async () =>{
		try{
			const res= await fetch(`http://${hostURL()}/api/list?iam=admin`, {
				method: `GET`,
				headers: {
					"Content-Type":"applation/json",
				},
			});
			if(res.ok){
				const resData = await res.json();
				console.log(resData);
				if(resData.user){
					setUser(resData.user);
				} else {
					alert(resData.message);
					
				}
			}
		}catch(e){
			console.log(e);
		}
	};

	useEffect(()=>{
		console.log("화면 로드됨");
		fetchUserList();
	},[]);
	useEffect(()=>{
		console.log("현재 카운트 값은"+count);
	},[count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button title={`count is ${count}`} onClick={() => setCount((count) => count + 1)} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
			<div className='div'>
				<table>
					<tr>
						<th>아이디</th>
						<th>이름</th>
						<th>이메일</th>
						<th>가입일</th>
						<th>수정일</th>
						<th>탈퇴여부</th>
					</tr>
					{user.map((u, i)=>{
						return (
							(u.is_deleted)?(
						<tr key={i}>
							<td className='red-td'>{u.id}</td>
							<td className='red-td'>{u.name}</td>
							<td className='red-td'>{u.email}</td>
							<td className='red-td'>{u.createdAt}</td>
							<td className='red-td'>{u.updatedAt}</td>
							<td className='red-td'>탈퇴</td>
						</tr>
						):(
							<tr key={i}>
							<td className='white-td'>{u.id}</td>
							<td className='white-td'>{u.name}</td>
							<td className='white-td'>{u.email}</td>
							<td className='white-td'>{u.createdAt}</td>
							<td className='white-td'>{u.updatedAt}</td>
							<td className='white-td'></td>
						</tr>
						));
					})};
				</table>
			</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// createdAt
// : 
// "2025-06-26T05:25:29.000Z"
// email
// : 
// "minsu07311@icloud.com"
// id
// : 
// 1
// is_deleted
// : 
// false
// name
// : 
// "admin"
// password
// : 
// "$2b$10$d5JaLRiRKnpDmxxQxfu/MOT7UUNrKntWgseXzR3gwQmAkkgoCf/6."
// updatedAt
// : 
// "2025-06-26T05:27:14.000Z"