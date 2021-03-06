import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Modal from "../components/Modal";

function Home() {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container employee-form">
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form onSuccess={() => setModalState(true)} />
      </div>

      <Modal isOpen={modalState} close={() => setModalState(false)}>
        <div id="confirmation" className="modal">
          Employee Created!
        </div>
      </Modal>
    </>
  );
}

export default Home;
