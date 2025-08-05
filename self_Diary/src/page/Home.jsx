import { useState, useContext, useEffect } from "react";
import Editor from "../components/Editor";
import Header from "../components/Header";
import Diary from "./Diary";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { DiaryStateContext } from "../util/contexts";
// import DiaryList from "../components/DiaryList";

const formatDateToString = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const Home = () => {
  const originData = useContext(DiaryStateContext);
  const today = new Date();
  const [data, setData] = useState([]);
  const [date, setDate] = useState(today);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("all"); // all 또는 daily로 모두 보여줄건지 ,날짜별로 보여줄건지
  // const isNewPage = location.pathname === "/New"; // New 페이지 여부

  // 페이지 넘기기 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // useEffect 추가
  useEffect(() => {
    let filtered = [...originData];

    //   //검색필터링
    //   if (search) {
    //     filtered = filtered.filter((item) => item.content.includes(search));
    //   }
    //   //정렬
    //   if (viewMode === "latest") {
    //     filtered.sort(
    //       (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    //     );
    //   } else if (viewMode === "oldest") {
    //     filtered.sort(
    //       (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
    //     );
    //   }

    //   setData(filtered);
    // }, [originData, date, search, viewMode]);

    // 검색 + 정렬 처리

    if (search) {
      filtered = filtered.filter((item) =>
        item.content.includes(search.trim())
      );
    }

    if (viewMode === "latest") {
      filtered.sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
    } else if (viewMode === "oldest") {
      filtered.sort(
        (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
      );
    }

    setData(filtered);
    setCurrentPage(1); // 검색/정렬 시 1페이지로 초기화
  }, [originData, search, viewMode]);

  // 페이지네이션 계산
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = data.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // --- 페이지네이션 이동 함수 ---
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //ㅡㅡ네비게이트(해당 주소값으로 보내주는역할)ㅡㅡㅡㅡ//
  const navigate = useNavigate();

  

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ달력 이동ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
  //달력 이전으로
  const handlePrevDay = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 1);
    setDate(newDate);
  };

  //달력 다음으로
  const handleNextDay = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    setDate(newDate);
  };
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//

  const onChangeViewMode = (e) => {
    setViewMode(e.target.value);
  };

  const onClickButtonNew = () => {
    navigate("/New");
  };

  //ㅡㅡㅡㅡ검색어 변경ㅡㅡㅡㅡㅡㅡ//
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {/*헤더 달력*/}
      <Header
        Header_L={<button onClick={handlePrevDay}> &lt; </button>}
        Header_M={<p>{date.toLocaleDateString()}</p>}
        Header_R={<button onClick={handleNextDay}> &gt; </button>}
      />
      {/*ㅡㅡㅡㅡㅡㅡ*/}
      <div
        className="menu_bar"
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <select
          className="menu_bar2"
          value={viewMode}
          onChange={onChangeViewMode}
          style={{
            height: "40px",
            width: "100px",
            fontSize: "16px",
            textAlign: "center",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
          }}
        >
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <div className="mainWriter">
          <Button
            text={"새 업무 작성하기"}
            type={"POSITIVE_1"}
            onClick={onClickButtonNew}
          />
        </div>
      </div>
      <br />
      <div>
        <input
          value={search}
          onChange={onChangeSearch}
          placeholder="검색할 내용을 입력하세요"
          style={{
            borderRadius: "8px",
            height: "30px",
            width: "300px",
          }}
        />
      </div>
      <hr />
      {currentData.length !== 0 ? (
        <>
          <Diary data={currentData} />
          {/* 페이지네이션 버튼 */}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                style={{
                  margin: "0 5px",
                  padding: "5px 10px",
                  backgroundColor: currentPage === i + 1 ? "#6c63ff" : "#eee",
                  color: currentPage === i + 1 ? "#fff" : "#000",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p>조회된 데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default Home;