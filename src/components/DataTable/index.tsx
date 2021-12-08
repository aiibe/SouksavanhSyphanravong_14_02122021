import { useMemo, useState } from "react";
import SearchBox from "./components/SearchBox";
import ShowInfo from "./components/ShowInfo";
import Showing from "./components/Showing";
import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";
import { matchColumnOrder } from "./helper";
import "./index.css";
import { PropType } from "./types/DataTable";

function DataTable({ showingLength, columns, rows }: PropType) {
  const [showing, setShowing] = useState(showingLength[0]);
  const data = useMemo(() => matchColumnOrder(rows, columns), [rows, columns]);

  return (
    <div className="react-datatable__wrap">
      <div className="react-datatable__sort-filter">
        <Showing
          value={showing}
          options={showingLength}
          onSelect={(number: number) => setShowing(number)}
        />
        <SearchBox />
      </div>

      <table className="react-datatable__table" role="grid">
        <TableHead columns={columns} />
        <TableBody data={data} showLength={showing} />
      </table>

      <div className="react-datatable__foot">
        <ShowInfo showing={showing} total={data.length} />
        <div
          className="dataTables_paginate paging_simple_numbers"
          id="employee-table_paginate"
        >
          <a aria-controls="employee-table">Previous</a>
          <span></span>
          <a>Next</a>
        </div>
      </div>
    </div>
  );
}

DataTable.defaultProps = {
  showingLength: [10, 25, 50, 100],
};

export default DataTable;
