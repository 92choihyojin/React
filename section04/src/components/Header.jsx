import { useState } from "react";

function Header(){
	//let count = 1;
	const [count, setCount] = useState(0);
	const [Light, setLight] = useState('OFF');

	//이벤트 핸들러
	const onClickBtn1 = () => {
		setLight(light ==='ON'? 'OFF' : 'ON'); // 삼항연산자
	};
	
	//setLight(); \\ Light ON => OFF , OFF => ON 을 해결하기 위해
	//if - else 문
	/*if(light === 'ON'){
		setLight('OFF');
	} else{
		setLight('ON');
	}*/

	
	//setCount(count + 1) // count = count + 1 하는 뜻
	return (
		<>
			<div>
				<h1>Count</h1>
				<h1>{light}</h1>
				<button
					style={{ border: "1px solid black" }}
					onClick={()=>{setLight(light ==='ON'? 'OFF' : 'ON')}} >
						{light ==='ON'? '꺼짐' : '켜짐'}
				</button>
			</div>
			<div>
				<h1>{count}</h1>
				<button
					style={{ border: "1px solid black" }}
					onClick={() => { setCount(count + 1) }}>
					+
				</button>
			</div>
		</>
	)
};
	
	
export default Header;