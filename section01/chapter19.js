//배열내장함수 (forEach)
const arr = [1, 2, 3, 4];
//
for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

arr.forEach((value, index, array) => {
  //console.log(value);
  //console.log(index);
  //console.log(array);
  //console.log("===============================");
});
//arr.forEach((e) => {
//console.log(value);
//console.log(index);
//console.log(array);
//console.log("===============================");
// console.log(e);
// newArr.push(e * 2);
//});

//console.log(newArr);

//배열내장객체 map => 위도,경도, =>새로운리턴
const newArr2 = arr.map((e) => e * 4);
console.log(newArr2);

//배열내장찾기

//배열내장객체 indexof

arr.indexOf(3);
//console.log(`3값위치:${arr.indexOf(3)}`);

//배열내장객체 findIndex
const resultIndex = arr.findIndex((e) => {
  console.log("찾는중");
  return e === 6;
});
console.log(`6 findIndex: ${resultIndex}`);

//배열내장객체 find
let arr5 = [{ name: "구길동" }, { name: "홍길동" }];

const resultArray = arr5.find((e) => e.name === "홍길동");

//console.log(resultArray);

//배열내장 객체 filter 해당되는 객체를 찾아서 모두 리턴한다.
let arr6 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const resultArray2 = arr6.filter((e) => {
  return e.hobby === "테니스";
});

console.log(resultArray2);

//배열내장객체 map
const resultArray3 = arr6.map((e) => {
  return e.name;
});
