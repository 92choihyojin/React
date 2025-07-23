// src/component/common/FetchingModal.jsx
import { Modal, Spinner } from "react-bootstrap";

const FetchingModal = ({ show = true }) => {
  return (
    <Modal show={show} centered>
      <Modal.Body className="text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">로딩 중입니다...</p>
      </Modal.Body>
    </Modal>
  );
};

export default FetchingModal;
