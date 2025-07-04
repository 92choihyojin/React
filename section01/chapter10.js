//함수 호이스팅
//function add(num1,num2){
//	console.log(num1 + num2);
//}
//add(10,20);

let sub1 = (num1, num2)=> console.log(num1 / num2);

let sub2 = (num1, num2) =>console.log(num1 * num2);

let sub3 = (func, num1, num2) => {
	console.log(num1 / num2);
	func(num1, num2);
}
//함수
sub3((num1, num2) =>console.log(num1 - num2),11,20);

//함수 선언문: 함수 호이스팅된다.
function add(num1, num2){
	console.log(num1 + num2);
}

//콜백함수 응용
function repeat(count, callback) {
	for (let idx = 1; idx <= count; idx++) {
	let result = callback(idx,idx);
		console.log(`result =${result}`);	
	}
}
	//콜백함수 응용
function repeat2(count, callback) {
	for (let idx = 1; idx <= count; idx++) {
		let result = callback(idx,idx);
		console.log(`result =${result}`);	
		}
	}

	//함수 표현식 (화살표함수)
	let chj =(a,b)=> a*b;
	repeat2(5, (a,b)=> a*b);
	repeat2(5, (a,b)=> a-b);
	repeat2(5, (a,b)=> a+b);
	repeat2(5, (a,b)=> a/b);
	repeat2(5, (a,b)=> a*b);

	