import "./UserDisplay.css";

const UserDisplay = ({ userList, onUserSelect, selectedUser}) => {
	const handleArrowKeyDown = (event) => {
    // if (event.keyCode == 38 || event.keyCode == 40) {
      console.log(event);
      //event.preventDefault();
    // }
  };

  return (
    <div className="UserDisplay">
      <h1>회원 정보 출력</h1>
      <hr />
      <table onKeyDown={handleArrowKeyDown}>
        <thead>
          <tr>
            <th>이 름</th>
            <th>나 이</th>
            <th>성 별</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((data, index) => {
            if (data == selectedUser) {
              return (
                <tr
                  key={index}
                  style={{ backgroundColor: "#6c82fc" }}
                  onClick={() => onUserSelect(data)}
                >
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.phone}</td>
                </tr>
              );
            } else {
              return (
                <tr key={index} onClick={() => onUserSelect(data)}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.phone}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserDisplay;
