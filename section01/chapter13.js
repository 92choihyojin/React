//객체 생성(생성자 객체, 리터럴객체)
let obj1 = new Object();
let obj2 = {};

console.log(obj1);
console.log(obj2);

let person = {
  name: "홍길동",
  age: 30,
  hobby: "축구",
  job: "Developer",
  extra: {}, //객체도 들어올수 있음
  extra2: function () {}, //함수도 들어올수 있음
  "like cat": true, //한칸띄는 변수가 있으면 “ ”
};
//1번 주석
//person.name = 10;
//console.log(person["name"]);

person.chj = "개발자"; //person 이라는곳에 추가도 가능하다
console.log(person);
delete person.chj; //삭제할수있다.
console.log(person);

//객체에서 해당되는 멤버변수가 존재하는지확인(in 연산자)
let result = "name" in person;
console.log(result);
