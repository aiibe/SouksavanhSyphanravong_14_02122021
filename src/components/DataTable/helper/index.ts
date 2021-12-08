import { ColumnType, DataType } from "../types/DataTable";

export function isEvenNumber(value: number): boolean {
  return value % 2 == 0;
}

/**
 * Function that returns transformed data with fields
 * matched to column order
 * @param data Data array (raw)
 * @param columns Columns array
 * @returns Object[] Transformed data (order ensure for table)
 */
export function matchColumnOrder(
  data: DataType[],
  columns: ColumnType[]
): DataType[] {
  const columnFields = columns.map(({ field }: ColumnType) => field);
  const newData = data.map((item: DataType) =>
    // Build new object in right order
    columnFields.reduce((obj: DataType, f: string) => {
      obj[f] = item[f];
      return obj;
    }, {})
  );

  return newData;
}
