import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/getStringedDate";
import { DiaryStateContext } from "../App";
import React, { useEffect, useState, useContext } from "react";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  //사용자 훅스를 만들어서 사용
  //const curDiaryItem = useDiary(params.id);
  //if (!curDiaryItem) {
  // return <div>데이터 로딩중...!</div>;
  //}
  //전체 데이터에서 해당되는 id 가져오기
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  //마운트될 때 해당되는 id를 찾아서 객체가져오기
  useEffect(() => {

    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);
  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }
  //================================

  const { createdDate, emotionId, content } = curDiaryItem;
  //날짜를 문자열로 가져오기
  const title = getStringedDate(new Date(createdDate));
  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};
export default Diary;
