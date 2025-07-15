import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import { useParams } from "react-router-dom";

const ReadPage= ()=> {
  const { tno } = useParams();
  return (
    <Container>
      <Header />
      To do ReadPage {tno}
    </Container>
  );
}

export default ReadPage;