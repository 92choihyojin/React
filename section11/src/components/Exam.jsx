import { useState, useReducer } from "react";

function reducer(count, action){
 //setCount 해야될일 (CURD)
 switch(action.type){
	case "INCREASE": return count + action.data;
	case "DECREASE": return count - action.data;
	default: return count;
}
}

const Exam =()=>{
// const [count, setCount] = useState(0);
// const onIncrease =()=>{
// setCount(count +1);
// };
// const onDecrease = () => {
// setCount(count -1);
// };
  const [count, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREASE", data: 1 });
  };
  const onDecrease = () => {
    dispatch({ type: "DECREASE", data: 1 });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}> + </button>
      <button onClick={onDecrease}> - </button>
    </div>
  );
};

export default Exam;