import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "react-basic-datatable";
import { getItems, setItems } from "../utils/storage";
import { columns } from "../constants/table";
import zdata from "../mock/hr-net.json";

function EmployeeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get data from localStorage
    const employees = getItems("employees");
    setData(employees ? employees : setItems("employees", []));

    // // Mock data 150 fake employees (comment out)
    // setData(zdata);
  }, []);

  return (
    <div className="container employee-list">
      <h1 className="employee-list__title">Current Employees</h1>
      <DataTable columns={columns} rows={data} />
      <div className="employee-list__nav-link">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default EmployeeList;
