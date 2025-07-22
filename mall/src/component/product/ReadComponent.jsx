import { useEffect, useState, useRef } from "react";
import { getOne } from "../../api/TodoApi";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";


const ReadComponent = ({ pno }) => {
  
  return (
    <h1>ReadComponent pno = {pno}</h1>
  );
};

export default ReadComponent;
