//모듈 , 클래스 , 함수(산안, 표현(2))
export default function (a, b) {
  return a + b;
}

export const sub = (a, b) => a - b;

//모듈을 외부공개 메세지 => import 임포트 해준다.
exports = { add, sub };
