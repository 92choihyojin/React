import { Container } from "react-bootstrap";
import Header from "./../../include/Header";
import { useParams } from "react-router-dom";
import ModifyComponent from "../../component/todo/ModifyComponent";

const ModifyPage = () => {
	  const { tno } = useParams();
  return (
    <Container>
      <Header />
      <ModifyComponent tno={tno} />
    </Container>
  );
};

export default ModifyPage;
