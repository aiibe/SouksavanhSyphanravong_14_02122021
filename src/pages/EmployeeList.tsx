import { DataTable } from "react-basic-datatable";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { columns } from "../constants/table";
import { State } from "../store/types";
// import zdata from "../mock/hr-net.json";

function EmployeeList() {
  const { employees } = useSelector((state: State) => state);

  return (
    <div className="container employee-list">
      <h1 className="employee-list__title">Current Employees</h1>
      <DataTable columns={columns} rows={employees} />
      <div className="employee-list__nav-link">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default EmployeeList;
