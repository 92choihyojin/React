import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const DiaryList = ({ data = [] }) => {
	const nav = useNavigate();
	const [sortType, setSortType] = useState('latest');
	const onChangeSortType = (e) =>{
		setSortType(e.target.value);
	};
 
	const getSortedData = () => {
    //새로운 정렬을 리턴한다.
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();
	const onClickNav = () =>{
		nav("/new");
		
	};

  return (
    <div className="DiaryList">
      <section className="DiaryList_item">
        <select onChange ={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button onClick={() => nav("/new")}
				text={"새 일기 쓰기"}
				type={"POSITIVE"} />
      </section>

      <section className="DiaryList_item">
        {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
      </section>
    </div>
  );
};
export default DiaryList;
