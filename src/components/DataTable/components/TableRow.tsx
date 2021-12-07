import { isEvenNumber } from "../helper";
import { RowPropType } from "../types/DataTable";

function TableRow({ data, index }: RowPropType) {
  return (
    <tr
      role="row"
      className={
        isEvenNumber(Number(index))
          ? "react-datatable__table-row--odd"
          : "react-datatable__table-row"
      }
    >
      {Object.values(data).map((value: any) => (
        <td>{value}</td>
      ))}
    </tr>
  );
}

export default TableRow;
