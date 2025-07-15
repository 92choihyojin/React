import { Container } from "react-bootstrap";
import Header from "./../../include/Header";
import ListComponent from "../../component/ListComponent";

const ListPage = () => {
  return (
    <Container>
      <Header />
      <div className="d-grid gap-2 mt-5">
				<ListComponent/>
      </div>
    </Container>
  );
};

export default ListPage;
