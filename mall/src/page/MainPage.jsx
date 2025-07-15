import { Container } from "react-bootstrap";
import Header from "../include/Header";
import Button from "react-bootstrap/Button";

const MainPage = () => {
  return (
    <>
      <Container>
        <Header />
        <div className="d-grid gap-2 mt-3" >
        	<Button className="btn btn-outline-secondary" type="button">
            Block level button
          </Button>
        </div>
      </Container>
    </>
  );
};

export default MainPage;
