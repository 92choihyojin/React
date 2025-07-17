import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

//param Trues이면 자신의값을 정수로 변환 리턴하고 , false 이면 defaultValue
const getNum = (param, defaultValue) => {
  if (!param) {
    return defaultValue;
  }
  return parseInt(param);
};

const useCustomMove = () => {
  //url // <a href=""></a> 같다
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  const queryDefault = createSearchParams({ page, size }).toString(); //새로 추가

  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      //?page= 1&size=10
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
        //?page= 1&size=10
      }).toString();
    } else {
      //?page= 1&size=10
      queryStr = queryDefault;
    }

    navigate({
      pathname: `../todo/list`,
      search: queryStr,
    });
    setRefresh(!refresh); //추가
  };

  const moveToModify = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../modify/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  const moveToRead = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../read/${num}`,
      search: queryDefault,
    });
  };

  return { moveToList, moveToModify, moveToRead, page, size, refresh }; //moveToModify 추가
};

export default useCustomMove;
