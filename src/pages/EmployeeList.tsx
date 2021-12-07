import { Link } from "react-router-dom";

function EmployeeList() {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div id="employee-table_wrapper" className="dataTables_wrapper no-footer">
        <div className="dataTables_length" id="employee-table_length">
          <label>
            Show{" "}
            <select
              name="employee-table_length"
              aria-controls="employee-table"
              className=""
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>{" "}
            entries
          </label>
        </div>
        <div id="employee-table_filter" className="dataTables_filter">
          <label>
            Search:
            <input
              type="search"
              className=""
              placeholder=""
              aria-controls="employee-table"
            />
          </label>
        </div>
        <table
          id="employee-table"
          className="display dataTable no-footer"
          role="grid"
          aria-describedby="employee-table_info"
        >
          <thead>
            <tr role="row">
              <th
                className="sorting_asc"
                tabIndex={0}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                style={{ width: "76.8625px" }}
                aria-sort="ascending"
                aria-label="First Name: activate to sort column descending"
              >
                First Name
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                style={{ width: "74.2125px" }}
                aria-label="Last Name: activate to sort column ascending"
              >
                Last Name
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                style={{ width: "70.65px" }}
                aria-label="Start Date: activate to sort column ascending"
              >
                Start Date
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                style={{ width: "82.65px" }}
                aria-label="Department: activate to sort column ascending"
              >
                Department
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                style={{ width: "89.7625px" }}
                aria-label="Date of Birth: activate to sort column ascending"
              >
                Date of Birth
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                style={{ width: "40.575px" }}
                aria-label="Street: activate to sort column ascending"
              >
                Street
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                style={{ width: "29.3375px" }}
                aria-label="City: activate to sort column ascending"
              >
                City
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                style={{ width: "34.6625px" }}
                aria-label="State: activate to sort column ascending"
              >
                State
              </th>
              <th
                className="sorting"
                tabIndex={0}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                style={{ width: "63.575px" }}
                aria-label="Zip Code: activate to sort column ascending"
              >
                Zip Code
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td valign="top" colSpan={9} className="dataTables_empty">
                No data available in table
              </td>
            </tr>
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
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
