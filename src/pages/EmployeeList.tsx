import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";

function EmployeeList() {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <DataTable />
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
