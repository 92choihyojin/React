import { getEmotionImage } from "../util/get-emotion-image";


const Emotion = ({ emotionId, emotionName, isSelected, onClick }) => {
	console.log(emotionId , isSelected);
  return (
    <div
      style={{
        marginTop: "20px",
        width: "100px", // 이미지 컨테이너 크기
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        flexDirection: "column",
        borderColor: isSelected ? "red" : "transparent",
        borderWidth: 5,
        borderStyle: "solid", // 테두리 스타일 추가
				cursor: "pointer"
      }}
      onClick={onClick}
    >
      <img width={60} height={60} src={getEmotionImage(emotionId)} />
      <div>{emotionName}</div>
    </div>
  );
};

export default Emotion;
