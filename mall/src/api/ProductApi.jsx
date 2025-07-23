import axios from "axios";
import { data } from "react-router";

//서버 주소 및 url
export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/products`;

//1.선택 http://localhost:8080/api/todo/100 <- 요청하는방식 axios.get(`${prefix}/${tno}`)
export const getOne = async (pno) => {
  const result = await axios.get(`${prefix}/${pno}`);
  return result.data;
};
//2.페이징리스트
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const result = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  console.log(result);
  return result.data;
};
//3.삽입
export const postAdd = async (product) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const result = await axios.post(`${prefix}/`, product, header);
  return result.data;
};

//4.수정
export const putOne = async (pno, product) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const result = await axios.put(`${prefix}/${pno}`, product, header);
  return result.data;
};
//5.삭제
export const deleteOne = async (pno) => {
  const result = await axios.delete(`${prefix}/${pno}`);
  return result.data;
};
