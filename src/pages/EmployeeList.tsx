import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import data from "../mock/hr-net.json";

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
  return (
    <div className="container">
      <h1>Current Employees</h1>
      <DataTable columns={columns} rows={data} />
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
