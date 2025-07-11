import "./DiaryItem.css";
import { getEmotionImages } from "../util/getEmotionImages";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {

  return (
    <div className="DiaryItem">
      <div className="img_section">
        <img src={getEmotionImages(emotionId)} alt={`emotion-${emotionId}`} />
      </div>

      <div className="info_section">
        <div className="created_date">
					{new Date().toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>

      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
