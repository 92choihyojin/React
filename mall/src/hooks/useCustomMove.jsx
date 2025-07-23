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
  //?page=1&size=10
  const queryDefault = createSearchParams({ page, size }).toString(); //새로 추가

  //TODO 이동하는 이벤트 처리
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
      pathname: `../todo/modify/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  const moveToRead = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../todo/read/${num}`,
      search: queryDefault,
    });
  };

  // PRODUCT 이동하는 이벤트 처리
  const moveProductToList = (pageParam) => {
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
      pathname: `../Product/list`,
      search: queryStr,
    });
		//계속적으로 
    setRefresh(!refresh); //추가
  };

  const moveProductToModify = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../Product/modify/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  const moveProductToRead = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../Product/read/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  return {
    moveToList,
    moveToModify,
    moveToRead,
    moveProductToList,
    moveProductToModify,
    moveProductToRead,
    page,
    size,
    refresh,
  }; //moveToModify 추가
};

export default useCustomMove;
