import { Container } from "react-bootstrap";
import Header from "./../../include/Header";
import { useParams } from "react-router-dom";
import ModifyComponent from "../../component/product/ModifyComponent";
import useCustomMove from "../../hooks/useCustomMove";

const ModifyPage = () => {
	  const { pno } = useParams();
		const { moveToList, moveRead } = useCustomMove();
  return (
    <Container>
      <Header />
      <ModifyComponent pno={pno} />
    </Container>
  );
};

export default ModifyPage;
