import { ColumnType } from "../types/DataTable";
import { PropType } from "../types/TableHead";
import Arrows from "./Arrows";

function TableHead({
  columns,
  fieldSort,
  sortBy: [currentField, ascending],
}: PropType) {
  return (
    <thead>
      <tr role="row">
        {columns.map(({ label, field }: ColumnType) => (
          <th
            key={field}
            tabIndex={0}
            onClick={() => fieldSort(field)}
            aria-sort="ascending"
            className="react-datatable__head-field"
            aria-label={`{title}: activate to sort column descending`}
          >
            <span>{label}</span>
            <Arrows active={currentField === field} ascending={ascending} />
          </th>
        ))}
      </tr>
    </thead>
  );
}
export default TableHead;
