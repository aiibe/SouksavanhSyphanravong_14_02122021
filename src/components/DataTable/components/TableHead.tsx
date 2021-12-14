import { ColumnType } from "../types/DataTable";
import { PropType } from "../types/TableHead";

function TableHead({ columns, fieldSort }: PropType) {
  return (
    <thead>
      <tr role="row">
        {columns.map(({ label, field }: ColumnType) => (
          <th
            key={field}
            tabIndex={0}
            onClick={() => fieldSort(field)}
            aria-sort="ascending"
            aria-label={`{title}: activate to sort column descending`}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export default TableHead;
