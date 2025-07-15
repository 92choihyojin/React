import { Container } from "react-bootstrap";
import Header from "./../../include/Header";
import ListComponent from "../../component/ListComponent";
import { useSearchParams } from "react-router-dom";

const ListPage = () => {
	const [queryParams] = useSearchParams();
	// 현재 페이지
	const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1 ; 
	// 현재 화면의 페이지사이즈 
	const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10 ; 

  return (
    <Container>
      <Header />
      <div className="d-grid gap-2 mt-5">
				{`Todo List page components page: ${page} size: ${size}`}
				<ListComponent/>
      </div>
    </Container>
  );
};

export default ListPage;
