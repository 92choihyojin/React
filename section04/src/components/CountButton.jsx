function CountButton({}) {
  return (
    <>
      <div>
        <button
          style={{ border: "1px solid black" }}
          onClick={() => {
            props.countClickButton();
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default CountButton;
