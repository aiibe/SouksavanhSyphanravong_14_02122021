import { useMemo, useState } from "react";
import Paginate from "./components/Paginate";
import SearchBox from "./components/SearchBox";
import ShowInfo from "./components/ShowInfo";
import Showing from "./components/Showing";
import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";
import { matchColumnOrder, objectToString, searchList } from "./helper";
import "./index.css";
import { PropType } from "./types/DataTable";

function DataTable({ showingLength, columns, rows }: PropType) {
  const [showing, setShowing] = useState(showingLength[0]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Memoize data matched to columns
  const memData = useMemo(
    () => matchColumnOrder(rows, columns),
    [rows, columns]
  );

  // Index data for full-text search
  const indexedData = useMemo(() => objectToString(memData), [memData]);

  // Update search value and reset current page to 1
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  // Update showing items per page and reset to page 1
  const handleSetShowing = (number: number) => {
    setShowing(number);
    setCurrentPage(1);
  };

  // Filter data on search
  let data = search.length ? searchList(search, indexedData, memData) : memData;

  return (
    <div className="react-datatable__wrap">
      <div className="react-datatable__sort-filter">
        <Showing
          value={showing}
          options={showingLength}
          onSelect={handleSetShowing}
        />
        <SearchBox inputChange={handleSearchChange} inputValue={search} />
      </div>

      <table className="react-datatable__table" role="grid">
        <TableHead columns={columns} />
        <TableBody data={data} showLength={showing} page={currentPage} />
      </table>

      <div className="react-datatable__foot">
        <ShowInfo
          showingCount={showing}
          totalCount={memData.length}
          filtering={search.length ? true : false}
          filterCount={search.length ? data.length : 0}
          currentPage={currentPage}
        />
        <Paginate
          data={data}
          limit={showing}
          setPage={(value) => setCurrentPage(value)}
          current={currentPage}
        />
      </div>
    </div>
  );
}

DataTable.defaultProps = {
  showingLength: [10, 25, 50, 100],
};

export default DataTable;
