function BulbButton({ light, lightClickButton }) {
  return (
    <>
      <div>
        <button
          onClick={() => {
            lightClickButton();
          }} >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>

    </>
  );
}

export default BulbButton;
