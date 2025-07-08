import "./UserDisplay.css";

const UserDisplay = ({userList, onUserSelect}) => {
  return (
    <div className="UserDisplay">
      <h1>회원 정보 출력</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>이 름</th>
            <th>나 이</th>
            <th>성 별</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((data) => {
            return (
              <tr key={data.name} onClick={()=>onUserSelect(data)}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserDisplay;
