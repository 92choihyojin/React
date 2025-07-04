import { useState } from "react";
import Bulb from "./components/Bulb";
import BulbButton from "./components/BulbButton";
import Count from "./components/Count";
import CountButton from "./components/CountButton";
import Register from "./components/Register";

export default function App() {
  return (
    <>
      <Register/>
    </>
  );
}




//=======================================================
// export default function App() {
//   // 상태값
//   const [light, setLight] = useState("OFF");
//   const [count, setCount] = useState(0);
//   // 이벤트 핸들러
//   const countClickButton = () => {
//     setCount(<button
// 			style={{ border: "1px solid black" }}
// 			onClick={() => { setCount(count + 1) }}>
// 			+
// 		</button> + countClickButton);
//   };

//   return (
//     <>
//       <div>
//         {/* Bulb 라는 컴포넌트에 매서드 생성자 상태값 light 전달후 객체 생성 */}
//         <Bulb light={light} />
//         <BulbButton lightClickButton={lightClickButton} />
//         <Count count={count} />
//         <CountButton countClickButton={countClickButton}/>
//       </div>
//     </>
//   );
// }
