import { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

function Home() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container">
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <EmployeeForm onSuccess={() => setSubmitSuccess(true)} />
      </div>

      {submitSuccess && (
        <div id="confirmation" className="modal">
          Employee Created!
        </div>
      )}
    </>
  );
}

export default Home;
