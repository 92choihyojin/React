import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useContext, useRef, useEffect } from "react";
import { DiaryDispatchContext } from "../util/contexts";
import Header from "../components/Header";
import Emotion from "../components/Emotion";
import Button from "../components/Button";
import "../componentsStyle/Editor.css";
import "../util/contexts";
import Editor from "../components/Editor";

//감정표현
const emotionList = [
  {
    emotionId: 1,
    emotionName: "매우 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "보통",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "매우 나쁨",
  },
];

const Edit = () => {
  const { state } = useLocation(); // Diary에서 전달받은 데이터
  const { onUpdate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const imageInputRef = useRef();

	//수정: 기존 감정값으로 초기화
  const [selectedEmotion, setSelectedEmotion] = useState(state?.emotionId || 3);
  const [content, setContent] = useState(state?.content || "");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  //완료여부 상태
  const [status, setStatus] = useState(state?.status || "미사용");

  const textareaRef = useRef();
  if (!state) {
    return <p>잘못된 접근입니다.</p>;
  }

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
  const handleUpdate = () => {
    if (content.trim() === "") {
      alert("내용을 입력해주세요.");
      navigate("/");
      return;
    }

    // 수정: 선택된 날짜와 이미지도 포함하여 업데이트
    const updatedDate = new Date().toISOString().split("T")[0];

    console.log("전달할 데이터:", {
      id: state.id,
      createdDate: selectedDate,
      emotionId: selectedEmotion,
      content: content,
      updatedDate: updatedDate,
      status: status,
    });

    onUpdate(
      state.id,
      selectedDate,
      selectedEmotion,
      content,
      updatedDate,
      status
    );
    onUpdate(updatedDate);
    navigate("/");
  };

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ취소하기ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const handleCancel = () => {
    if (window.confirm("수정을 취소하시겠습니까?")) {
      navigate("/"); // 홈으로 이동
    }
  };
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ이미지삽입ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const handleImageButtonClick = () => {
    imageInputRef.current.click(); // 파일 선택창 열기
  };
	
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ미리보기URLㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ달력 이동ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  const onClickButtonHome = () => {
    navigate("/");
  };
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

  const [SearchParams, setSearchParams] = useSearchParams();
  const updateNameParam = (newName) => {
    setSearchParams({ name: newName });
  };

   (
    <div className="Editor">
      <Header Header_L={<button onClick={onClickButtonHome}> &lt; </button>} />
      <h1>다이어리 수정</h1>
      <section className="date_section">
        <h4>수정할 날짜</h4>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((emotion) => {
						console.log(emotion);
            return (
              <Emotion
                key={emotion.emotionId}
                emotionId={emotion.emotionId}
                emotionName={emotion.emotionName}
                isSelected={emotion.emotionId === selectedEmotion}
                onClick={() => {
                  onClickEmotion(emotion.emotionId);
                }}
              />
            );
          })}
        </div>
      </section>

      <div className="Editor">
        <div>
          <strong>작성일:</strong> {state.createdDate}
        </div>
        {state.updatedDate && (
          <div>
            <strong>마지막 수정일:</strong> {state.updatedDate}
          </div>
        )}
        <section className="content_section">
          <textarea
            ref={textareaRef}
            value={content}
            placeholder="오늘 하루 어땠어요?"
            onChange={onChangeContent}
          />
        </section>
          <div style={{ marginTop: "10px" }}>
            <img
              alt="선택된 이미지"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            />
          </div>
        
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
                type="checkbox"
                name="status"
                value="진행중"
                checked={status === "진행중"}
                onChange={(e) => setStatus(e.target.value)}
              />
              진행중
            </label>
            <label>
              <input
                type="checkbox"
                name="status"
                value="완료"
                checked={status === "완료"}
                onChange={(e) => setStatus(e.target.value)}
              />
              완료
            </label>
            <label>
              <input
                type="checkbox"
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
            <Button
              text={"수정완료"}
              type={"POSITIVE_2"}
              onClick={handleUpdate}
            />
            <Button
              text={"취소하기"}
              type={"NEGATIVE"}
              onClick={handleCancel}
            />
          </div>
        </section>
      </div>
    </div>
  );

	return <Editor state={state} />;
};

export default Edit;