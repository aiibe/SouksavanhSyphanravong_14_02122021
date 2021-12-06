import { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import Modal from "../components/Modal";

function Home() {
  const [modalState, setModalState] = useState(true);
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container">
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <EmployeeForm onSuccess={() => setModalState(true)} />
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
