import { Container } from "react-bootstrap";
import Header from "./../../include/Header";
import { useParams } from "react-router-dom";

const ModifyPage = () => {
	  const { tno } = useParams();
  return (
    <Container>
      <Header /> 
			ModifyPage{tno}
    </Container>
  );
};

export default ModifyPage;
