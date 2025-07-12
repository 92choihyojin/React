import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import type { User } from "./types/user";
import { hostURL } from "./utils/common";
import Button from "./components/Button";

function App() {
  const [user, setUser] = useState<User[]>([]);

  const fetchUserList = async () => {
    try {
      const res = await fetch(`${hostURL()}/api/users`, {
        method: `GET`,
        headers: {
          "Content-Type": "applation/json",
        },
      });
      if (res.ok) {
        const resData = await res.json();
        console.log(resData);

        if (resData) {
          setUser(resData);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const validateUser = (user: any) => {
    if (!user.email){
			alert("email 을 작성해주세요")
			return false;
		}
    if (!user.userId) {
			alert("id 을 작성해주세요");
      return false;
    }
    if (!user.userPw) {
			alert("pw 을 작성해주세요");
			return false;
    }
    if (!user.phone) {
			alert("phone 을 작성해주세요");
      return false;
    }
    return true;
  };

  const _handlePost = async (
    newUser: Omit<User, "id" | "regDate" | "isNew" | "isEditing">
  ) => {
    if (validateUser(newUser)) return;
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const result = await response.json();
      console.log("등록 성공:", result);
    } catch (error) {
      console.error("등록 실패:", error);
    }
  };

  const _handleAddRow = () => {
    // 현재 행을 편집 모드로 변경
    const updated = [...user];

    // 새 빈 행 추가
    updated.splice(user.length + 1, 0, {
      id: 0,
      userId: "",
      userPw: "",
      email: "",
      phone: "",
      regDate: "",
      enable: true,
      isNew: true,
      isEditing: true,
    });

    setUser(updated);
  };

  useEffect(() => {
    console.log("화면 로드됨");
    fetchUserList();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="div">
        <table style={{ borderSpacing: 0 }}>
          <thead>
            <tr>
              <th className="white-td">선택</th>
              <th className="white-td">아이디</th>
              <th className="white-td">비밀번호</th>
              <th className="white-td">이메일</th>
              <th className="white-td">전화번호</th>
              <th className="white-td">가입일</th>
              <th className="white-td">탈퇴여부</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u, i) => (
              <tr key={i}>
                <td className="white-td">
                  <input type="checkbox" />
                </td>
                <td className="white-td">
                  {u.isEditing ? (
                    <input
                      type="text"
                      value={u.userId}
                      onChange={(e) => {
                        const updated = [...user];
                        updated[i].userId = e.target.value;
                        setUser(updated);
                      }}
                    />
                  ) : (
                    <p>{u.userId}</p>
                  )}
                </td>
                <td className="white-td">
                  {u.isEditing ? (
                    <input
                      type="text"
                      value={u.userPw}
                      onChange={(e) => {
                        const updated = [...user];
                        updated[i].userPw = e.target.value;
                        setUser(updated);
                      }}
                    />
                  ) : (
                    u.userPw
                  )}
                </td>
                <td className="white-td">
                  {u.isEditing ? (
                    <input
                      type="text"
                      value={u.email}
                      onChange={(e) => {
                        const updated = [...user];
                        updated[i].email = e.target.value;
                        setUser(updated);
                      }}
                    />
                  ) : (
                    u.email
                  )}
                </td>
                <td className="white-td">
                  {u.isEditing ? (
                    <input
                      type="text"
                      value={u.phone}
                      onChange={(e) => {
                        const updated = [...user];
                        updated[i].phone = e.target.value;
                        setUser(updated);
                      }}
                    />
                  ) : (
                    u.phone
                  )}
                </td>
                <td className="white-td">{u.regDate}</td>
                <td className="white-td">
									{u.isNew? (
										<Button title="저장하기" onClick={()=>{
											console.log(u);
											_handlePost(u);
										}}/>
									) : (
								
									<p></p>
									//{u.enable ? "" : "탈퇴"}
								)}
								</td>
              </tr>
            ))}
            <td className="white-td">
              <button onClick={() => _handleAddRow()}> + </button>
            </td>
            <td className="white-td"></td>
            <td className="white-td"></td>
            <td className="white-td"></td>
            <td className="white-td"></td>
            <td className="white-td"></td>
            <td className="white-td"></td>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

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
