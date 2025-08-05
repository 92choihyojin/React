import { useState ,useContext} from "react";
import "../componentsStyle/DiaryItem.css";
import Emotion from "../components/Emotion";
import { DiaryDispatchContext } from "../util/contexts";
import { useNavigate } from "react-router-dom";

const Diary = ({ data }) => {
  // const [showSlideMenu, setShowSlideMenu] = useState(false);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const [selectedItem, setSelectedItem] = useState(null);
	const navigate = useNavigate();

  //일기 클릭시
  const handleDiaryItemClick = (edata, index) => {
    setSelectedItem(selectedItem?.id === edata.id ? null : { ...edata, index });
  };

  //수정 로직
  const handleEdit = (e) => {
		 e.stopPropagation();
    if (selectedItem) {
       navigate("/Edit", { state: selectedItem });
      }
			setSelectedItem(null);
    
  };

  //삭제 로직
  const handleDelete = (e) => {
    e.stopPropagation();
    if (!selectedItem) return;
      
		if (window.confirm(`정말로 ${selectedItem.id}번 업무를 삭제하시겠습니까?`)){
		  onDelete(selectedItem.id);
		}
      setSelectedItem(null);
    };

    return (
      <>
        {data.map((edata, index) => {
          const isSelected = selectedItem?.id === edata.id;

          return (
            <div
              id={`diary_${index}`}
              key={edata.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "16px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
              className="diary"
              onClick={() => handleDiaryItemClick(edata, index)}
            >
              {/* 왼쪽 70% 정보 영역 */}
              <div style={{ width: "70%" }}>
                <div>
                  <strong>작성일 :</strong> {edata.createdDate}
                </div>
                <div>
                  <strong>ID :</strong> {edata.id}
                </div>
                <div>
                  <strong>내 용 :</strong> {edata.content}
                </div>
                <div>
                  <strong>완료 여부 :</strong>{" "}
                  {edata.isDone ? "✅ 완료" : "🕒 진행 중"}
                </div>
              </div>

              {/* 오른쪽 30% 정보 영역 */}
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {isSelected ? (
                  <>
                    <button
                      style={{
                        padding: "6px 10px",
                        background: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                      onClick={handleEdit}
                    >
                      📝 수정
                    </button>
                    <button
                      style={{
                        padding: "6px 10px",
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                      onClick={handleDelete}
                    >
                      🗑 삭제
                    </button>
                  </>
                ) : (
                  <Emotion emotionId={edata.emotionId} />
                )}
              </div>
            </div>
          );
        })}
      </>
    );
	};
export default Diary;