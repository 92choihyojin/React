//비동기로 처리한 방식(Web APIs 에서 실행된다)
//console.log(1);

//web apis 전송
// setTimeout(() => {
//   console.log(2);
// }, 3000);
//console.log(3);

//=====3초뒤에 hello출력 / 3초뒤에 a와 b 연산된 값 출력============
// function task() {
//   setTimeout(() => {
//     console.log("hello");
//   }, 3000);
// }
// task();

// function add(a, b) {
//   setTimeout(() => {
//     const sum = a * b;
//     console.log(sum);
//   }, 3000);
// }
// add(8, 2);
//=======================================
// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

//let callback = (sum) => console.log(sum);
//callback(10);

//add(a, b, callback);
//add(1, 2, (sum) => console.log(sum));
//========================================

// 1단계 음식을 주문하는 상황
function orderFood(food, callback) {
  //   console.log(food + "음식주문");
  //   setTimeout(() => {
  //     callback(food);
  //   }, 3000);
  // }
  // orderFood("백숙", (food) => {
  //   console.log(food + "주문완료");
  // });

  // 1단계 음식을 차게주문하는 상황
  // function coolFood(food, callback) {
  //   console.log(food + "차게주문");
  //   setTimeout(() => {
  //     callback(food);
  //   }, 2000);
  // }
  // coolFood("백숙", (food) => {
  //   console.log(food + "차게완료");
  //   78;
  // });

  // 1단계 음식을 냉동주문하는 상황
  // function freezeFood(food, callback) {
  //   console.log(food + "냉동주문");
  //   setTimeout(() => {
  //     callback(food);
  //   }, 2000);
  // }
  // freezeFood("백숙", (food) => {
  //   console.log(food + "냉동완료");
  // });

  //2단계 음식을 주문하고 => 음식을 차게 주문사항.

  orderFood("백숙", (food) => {
    console.log(food + "주문완료");
    coolFood("백숙", (food) => {
      console.log(food + "차게완료");
    });
  });
}

//3단계
//음식 주문 (완료30분) => 차게주문 (차게완료20분) =>냉동주문 (냉동완료20분)
orderFood("백숙", (food) => {
  console.log(food + "주문완료");
  coolFood("백숙", (food) => {
    console.log(food + "차게완료");
    freezeFood("백숙", (food) => {
      console.log(food + "냉동완료");
    });
  });
});
