import { Container } from "react-bootstrap";
import Header from "./../../include/Header";
import { useParams } from "react-router-dom";
import ModifyComponent from "../../component/todo/ModifyComponent";
import useCustomMove from '../../hooks/useCustomMove';

const ModifyPage = () => {
	  const { tno } = useParams();
		    const { moveToList, moveToRead } = useCustomMove();
  return (
    <Container>
      <Header />
      <ModifyComponent tno={tno} moveToList={moveToList} moveToRead={moveToRead}/>
    </Container>
  );
};

export default ModifyPage;