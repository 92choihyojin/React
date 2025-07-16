import axios from "axios";
import { data } from "react-router";

//서버 주소 및 url
export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/todo`;

//1.선택 http://localhost:8080/api/todo/100 <- 요청하는방식 axios.get(`${prefix}/${tno}`)
// await 서버주소 ; ==> 서버에서 답변 기다리는중
// const result = await 서버주고, 요청응답 기다리고 있다, 요청이오면 요청값을 받아서 저장한다.
export const getOne = async (tno) => {
  const result = await axios.get(`${prefix}/${tno}`);
  return result.data;
};
//2.선택

//3.수정

//4.삭제

//5.페이징리스트
// 선택 http://localhost:8080/api/list?page=2&size=10
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const result = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return result.date;
};
