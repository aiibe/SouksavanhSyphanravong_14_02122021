import { useState } from "react";
import zData from "../../mock/hr-net.json";
import SearchBox from "./components/SearchBox";
import Showing from "./components/Showing";
import TableRow from "./components/TableRow";
import "./index.css";
import { DataType, PropType } from "./types/DataTable";

const columns = [
  "First Name",
  "Last Name",
  "Start Date",
  "Department",
  "Date of Birth",
  "Street",
  "City",
  "State",
  "Zip Code",
];

// const data: any = [];
const data: any = zData;

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
            {columns.map((propName: string) => (
              <th
                key={propName}
                tabIndex={0}
                rowSpan={1}
                colSpan={1}
                aria-sort="ascending"
                aria-label={`{title}: activate to sort column descending`}
              >
                {propName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item: DataType, index: string) => (
              <TableRow data={item} index={index} />
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
