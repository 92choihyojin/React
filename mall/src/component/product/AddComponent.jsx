import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import useCustomMove from "../../hooks/useCustomMove";
import { postAdd } from "../../api/ProductApi";
import InfoModal from "../../component/common/InfoModal";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";

const initState = { pname: "", pdesc: "", price: 0, files: [] };

const AddComponent = () => {
  const [product, setProduct] = useState({ ...initState });

  const uploadRef = useRef(); //type = "file" 위치
	//feching
  const [fetching, setFetching] = useState(false);
	//모달창을 보여줄 정보저장
  const [result, setResult] = useState(null);

  const handleChangeProduct = (e) => {
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };

  //전송버튼을 눌렀을때 data Api server 전송(Insert)
  const handleClickAdd = (e) => {
    // 파일의 정보 [ file 1  /  file 2 ]
    const files = uploadRef.current.files;
    console.log(files);
    // ▼ <form method="post" action="전송할주소"> form 안에서 보내질 키값=value </form>
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    console.log(formData);
    setFetching(true); //페칭모달 보이는것
    postAdd(formData).then((data) => {
      setFetching(false);
      setResult(data.result);
    });
  };
	
	//모달창을 close
  const closeModal = () => {
    //ResultModal 종료
    setResult(null);
		moveProductToList();
  };

	const {moveProductToList} =useCustomMove();


  return (
    <Container className="p-5">
      {fetching ? <FetchingModal /> : <></>}
      {/* show = true : 버튼을 클릭해서 모달을 보여주는것과 같다. */}
      {result ? (
        <InfoModal
          title={"Product Add Result"}
          content={`${result}번 등록 완료`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            name="pname"
            type="text"
            value={product.pname}
            onChange={handleChangeProduct}
            placeholder="Enter pname"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            name="pdesc"
            value={product.pdesc}
            as="textarea"
            rows={4}
            onChange={handleChangeProduct}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
            placeholder="Enter price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Files</Form.Label>
          <Form.Control ref={uploadRef} type="file" multiple="true" />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center gap-2 ">
        <Button variant="primary" type="button" onClick={()=>{handleClickAdd}}>
          저장
        </Button>
      </div>
    </Container>
  );
};

export default AddComponent;
