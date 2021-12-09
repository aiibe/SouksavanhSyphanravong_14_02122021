import { isEvenNumber } from "../helper";
import { PropType } from "../types/TableRow";

function TableRow({ data, index }: PropType) {
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
        <td key={value}>{value}</td>
      ))}
    </tr>
  );
}

export default TableRow;
