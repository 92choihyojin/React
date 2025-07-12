import "./DiaryItem.css";
import { getEmotionImages } from "../util/getEmotionImages";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
	const nav = useNavigate();
	
	// 일기 상세보기
	const goDiaryPage = ()=>{
		nav(`/diary/${id}`);
	};
	// 일기 수정하기
	const goEditPage = ()=>{
		nav(`/edit/${id}`);
	};

	
  return (
    <div className="DiaryItem">
      <div className="img_section">
        <img src={getEmotionImages(emotionId)} onClick={goDiaryPage} />
      </div>

      <div className="info_section" onClick={goDiaryPage}>
        <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>

      <div className="button_section">
        <Button text={"수정하기"} onClick={goEditPage} />
      </div>
    </div>
  );
};

export default DiaryItem;
