import { useState } from "react";
import zData from "../../mock/hr-net.json";
import SearchBox from "./components/SearchBox";
import Showing from "./components/Showing";
import TableRow from "./components/TableRow";
import { matchColumnOrder } from "./helper";
import "./index.css";
import { ColumnType, DataType, PropType } from "./types/DataTable";

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

// const data: any = [];
const data: DataType[] = matchColumnOrder(zData, columns);

function DataTable({ showingLength }: PropType) {
  const [showing, setShowing] = useState(showingLength[0]);

  const handleShowingLength = (index: number) => {
    setShowing(showingLength[index]);
  };

  return (
    <div className="react-datatable__wrap">
      <div className="react-datatable__sort-filter">
        <Showing
          value={showing}
          options={showingLength}
          onSelect={handleShowingLength}
        />
        <SearchBox />
      </div>

      <table className="react-datatable__table" role="grid">
        <thead>
          <tr role="row">
            {columns.map(({ label, field }: ColumnType) => (
              <th
                key={field}
                tabIndex={0}
                rowSpan={1}
                colSpan={1}
                aria-sort="ascending"
                aria-label={`{title}: activate to sort column descending`}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data ? (
            data.map((item, index) => (
              <TableRow key={index} data={item} index={index} />
            ))
          ) : (
            <tr className="odd">
              <td valign="top" colSpan={9}>
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div
        className="dataTables_info"
        id="employee-table_info"
        role="status"
        aria-live="polite"
      >
        Showing 0 to 0 of 0 entries
      </div>
      <div
        className="dataTables_paginate paging_simple_numbers"
        id="employee-table_paginate"
      >
        <a
          className="paginate_button previous disabled"
          aria-controls="employee-table"
          data-dt-idx="0"
          tabIndex={-1}
          id="employee-table_previous"
        >
          Previous
        </a>
        <span></span>
        <a
          className="paginate_button next disabled"
          aria-controls="employee-table"
          data-dt-idx="1"
          tabIndex={-1}
          id="employee-table_next"
        >
          Next
        </a>
      </div>
    </div>
  );
}

const defaultProps = {
  showingLength: [10, 25, 50, 100],
};

DataTable.defaultProps = defaultProps;

export default DataTable;
