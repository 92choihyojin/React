let num1=10;
let num2=3;
// console.log(num1/num2);

//number 타입 Infinity(양수무한대) -Infinity
//(음수), NaN(Not a Number)
let num3=NaN;

// console.log(num3);
// console.log(typeof num3);

// null 타입과 undefined 차이점
let num4 = null;
//console.log(num4);

//형변환(강제형변환)
let srt1 = "10";
let srt2 = "10";
//let strToNum1 = Number(st1);
//console.log(10+strToNum1);
//console.log(str1 + str2);

//형변환 했는데 결과값 NaN
// Number, parseInt 차이점
let num5 = Number("20a");
let num6 = parseInt("20a");
//console.log(num6);

//Null 병합연산자
// a 변수에는 절대로 null , undefined 이 오면 안되는 변수
let a;
let b = 100;

a = b?? 0;
