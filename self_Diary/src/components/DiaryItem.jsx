// import "../componentsStyle/DiaryItem.css";
// import { memo,  } from "react";
// import { useContext } from "react";
// import {getEmotionImage} from "../util/get-emotion-image";
// import { TodoContext } from "../App";


// const DiaryItem = ({id, isDone, content, date}) => {
// 	const { onUpdate, onDelete } = useContext(TodoContext);

	// const onChangeCheckBox =()=>{
	// 	onUpdate(id);
	// };

// 	const onClickDeleteButton = ()=>{
// 		onDelete(id);
// 	};
// const DiaryItem = () => {
//   const emotionId = 5;

  // return (
    // <div className="TodoItem">
    //   <div className=""></div>
    //   <input
    //     onChange={onChangeCheckBox}
    //     readOnly
    //     checked={isDone}
    //     type="checkbox"
    //   />
    //   <div className="content">{content}</div>
    //   <div className="date">{new Date(date).toLocaleDateString()}</div>
    //   <button onClick={onClickDeleteButton}>삭제</button>
    // </div>

  //   <div className="DiaryItem">
  //     <div className="img_section">
  //       {/* <img src={getEmotionImage(emotionId)} /> */}
  //     </div>
  //     <div className="info_section">
  //       <div className="created_date">{new Date().toLocaleDateString()}</div>
  //       <div className="content">일기 컨텐츠</div>
  //     </div>
  //     <div className="button_section">
  //       <Button text={"수정하기"} />
  //     </div>
  //   </div>
  // );
// 	null)
// };


// export default memo(DiaryItem);
