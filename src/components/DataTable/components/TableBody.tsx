import { useMemo } from "react";
import { PropType } from "../types/TableBody";
import TableRow from "./TableRow";

function TableBody({ data, showLength }: PropType) {
  const items = useMemo(() => data.slice(0, showLength), [showLength]);

  return (
    <tbody>
      {!data.length ? (
        <tr className="react-datatable__table-row--odd">
          <td valign="top" colSpan={9} style={{ textAlign: "center" }}>
            No data available in table
          </td>
        </tr>
      ) : (
        items.map((item, index) => (
          <TableRow key={index} data={item} index={index} />
        ))
      )}
    </tbody>
  );
}

export default TableBody;
