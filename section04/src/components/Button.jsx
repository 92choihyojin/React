function Button({ text, color = "red", children }) {
  //이벤트 처리 핸들러 함수 (선언, 표현(2가지= 익명함수,화살표함수))
  // 익명함수 const onClickButton1 = function (){}
  // 화살표함수 const onClickButton2 = ()=>{};
  // const onClickButton = (e)=>{};
  // \\ e (이벤트 객체참조변수):버튼에서 이벤트를 클릭하면 클릭시 모든 정보를 가지고있다

  const onClickButton = (e) => {
    console.log(e);
    alert(`text=${text} color=${color} children${children}`);
  };
  return (
    <>
      <button
        type="button"
        style={{ color: color }}
        onClick={() => {
          onClick = { onClickButton };
        }}
      >
        {text} - {text.toUpperCase()}
        {children}
      </button>
    </>
  );
}

export default Button;
