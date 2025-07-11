import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";


const getMonthlyData = (pivotDate, data) => {
  //이번달 시작되는 시점과 끝나는 시점사이에 들어오는것만 필터링
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(), 1, 0, 0, 0 ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1, 0, 23, 59, 59 ).getTime();
  return data.filter( (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  //이번달 시작되는 시점과 끝나는 시점사이에 들어오는것만 필터링
  const monthlyData = getMonthlyData(pivotDate, data);

	//저장되어 있는 pivotDate 월을 1개월씩 증가
	const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

	//저장되어 있는 pivotDate 월을 1개월씩 감소
	const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };


  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList diaryList={monthlyData} />
    </div>
  );
};

export default Home;
