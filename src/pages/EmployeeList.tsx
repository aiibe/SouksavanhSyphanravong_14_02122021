import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import { getItems, setItems } from "../utils/storage";
// import zdata from "../mock/hr-net.json";

const columns = [
  { label: "First Name", field: "firstName" },
  { label: "Last Name", field: "lastName" },
  { label: "Start Date", field: "startDate" },
  { label: "Department", field: "department" },
  { label: "Date of Birth", field: "birthDate" },
  { label: "Street", field: "streetLocation" },
  { label: "City", field: "cityLocation" },
  { label: "State", field: "stateLocation" },
  { label: "Zip Code", field: "zipCode" },
];

function EmployeeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get data from localStorage
    const employees = getItems("employees");
    setData(employees ? employees : setItems("employees", []));

    // // Mock data 150 fake employees (comment out)
    // setData(zdata)
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
