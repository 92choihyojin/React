import "../componentsStyle/Editor.css";
import Button from "./Button";
import Emotion from "./Emotion";
import EmotionItem from "../util/get-emotion-image";
import { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "../util/contexts";
import { useNavigate } from "react-router-dom";
import "./Emotion";
import { emotionList } from "./EmotionItem";

const getTodayString = () => {
  const today = new Date();
  console.log("오늘 날짜:", today); // 실제 오늘 날짜 확인
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};



const Editor = ({state}) => {
  console.log(state);
  //상태관리
  const { onCreate, onUpdate } = useContext(DiaryDispatchContext);
  const [content, setContent] = useState(state?.content || "");
  const [selectedDate, setSelectedDate] = useState(
    state?.createdDate || getTodayString()
  );
  const [selectedEmotion, setSelectedEmotion] = useState(state?.emotionId || 3);
	
  const textareaRef = useRef();
  const navigate = useNavigate();
  //완료여부 상태
  const [status, setStatus] = useState(state?.isDone ? "완료" : "진행중");
  //이미지함수
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInputRef = useRef();

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ날짜 변경ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ감정 선택ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const onClickEmotion = (emotionId) => {
    setSelectedEmotion(emotionId);
  };

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ내용 변경ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ작성 완료ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const handleSubmit = () => {
    if (!content.trim()) {
      textareaRef.current.focus();
      alert("일기 내용을 입력해주세요.");
      return;
    }

    const diaryData = {
      // id: Date.now(),
      createdDate: selectedDate, // 기존 형식에 맞춤
      emotionId: selectedEmotion, // 이모션 값
      content: content.trim(), // 텍스트
      date: new Date(selectedDate).getTime(), // 타임스탬프 추가
      status: status, //완료여부
      image: selectedImage, // 이미지 
    };

    onCreate(diaryData); // Context의 onCreate 함수 호출
    console.log("저장된 업무 데이터:", diaryData);
    alert("업무가 작성완료 되었습니다!");
    navigate("/"); // 홈으로 이동
  };

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ작성 완료ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const handleUpdate = () => {
    if (content.trim() === "") {
      alert("내용을 입력해주세요.");
      navigate("/");
      return;
    }
    //id, createdDate, emotionId, content, status,
    const diaryData = {
      id: state?.id,
      createdDate: selectedDate, // 기존 형식에 맞춤
      emotionId: selectedEmotion,
      content: content.trim(),
      date: new Date(selectedDate).getTime(), // 타임스탬프 추가
      status: status,
    };
    console.log(diaryData);
    onUpdate(diaryData);
    navigate("/");
  };

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ취소하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const handleCancel = () => {
    if (window.confirm("작성을 취소하시겠습니까?")) {
      navigate("/"); // 홈으로 이동
    }
  };
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ이미지삽입ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const handleImageButtonClick = () => {
    imageInputRef.current.click(); // 파일 선택창 열기
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // 미리보기용 URL 생성
    }
  };

  // const [SearchParams, setSearchParams] = useSearchParams();
  // const updateNameParam = (newName) => {
  //   setSearchParams({ name: newName });
  // };

  return (
    <div className="Editor">
      <h1>{state ? "업무 수정" : "업무 작성"}</h1>
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </section>

      <section className="emotion_section">
        <h4>오늘의 업무</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((emotion) => {
            console.log(emotion);
            return (
              <Emotion
                key={emotion.emotionId} // emotion.emotion.id → emotion.emotionId
                emotionId={emotion.emotionId}
                emotionName={emotion.emotionName}
                isSelected={emotion.emotionId == selectedEmotion ? true : false}
                onClick={() => {
                  console.log(emotion.emotionId);
                  onClickEmotion(emotion.emotionId); // emotion.emotion.id → emotion.emotionId
                }}
              />
            );
          })}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 업무내용</h4>
        <textarea
          ref={textareaRef}
          value={content}
          placeholder="오늘 하루 어땠어요?"
          onChange={onChangeContent}
        />
      </section>
      {selectedImage && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={selectedImage}
            alt="선택된 이미지"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}

      <section className="button_section">
        {/*숨겨진 이미지 삽입*/}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button onClick={handleImageButtonClick}>이미지 삽입하기</button>

        <section className="status_section">
          <h4>완료 여부</h4>
          <label>
            <input
              type="radio"
              name="status"
              value="진행중"
              checked={status === "진행중"}
              onChange={(e) => setStatus(e.target.value)}
            />
            진행중
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="완료"
              checked={status === "완료"}
              onChange={(e) => setStatus(e.target.value)}
            />
            완료
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="미사용"
              checked={status === "미사용"}
              onChange={(e) => setStatus(e.target.value)}
            />
            미사용
          </label>
        </section>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {state ? (
            <Button
              text={"수정완료!"}
              type={"POSITIVE_2"}
              onClick={handleUpdate}
            />
          ) : (
            <Button
              text={"작성완료"}
              type={"POSITIVE_2"}
              onClick={handleSubmit}
            />
          )}

          <Button text={"취소하기"} type={"NEGATIVE"} onClick={handleCancel} />
        </div>
      </section>
    </div>
  );
};

export default Editor;