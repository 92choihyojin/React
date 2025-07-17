import axios from "axios";
import { data } from "react-router";

//서버 주소 및 url
export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/todo`;

//1.선택 http://localhost:8080/api/todo/100 <- 요청하는방식 axios.get(`${prefix}/${tno}`)
// await 서버주소 ; ==> 서버에서 답변 기다리는중
// const result = await 서버주고, 요청응답 기다리고 있다, 요청이오면 요청값을 받아서 저장한다.
// 특정번호의 todo를 조회하기 위해 사용
export const getOne = async (tno) => {
  const result = await axios.get(`${prefix}/${tno}`);
  return result.data;
};
//2.페이징리스트
// 선택 http://localhost:8080/api/list?page=2&size=10
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const result = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return result.data;
};
//3.삽입
export const postAdd = async (todoObj) => {
  const res = await axios.post(`${prefix}/`, todoObj);
  return res.data;
};

//4.수정
export const putOne = async (todoObj) => {
  const res = await axios.put(`${prefix}/${todoObj.tno}`, todoObj);
  return res.data;
};
//5.삭제
export const deleteOne = async (tno) => {
  const res = await axios.delete(`${prefix}/${tno}`);
  return res.data;
};
