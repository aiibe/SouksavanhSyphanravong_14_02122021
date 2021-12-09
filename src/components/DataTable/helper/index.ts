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

// Helpers for search

/**
 * Function to transform object to string for indexing
 * @param data Array data with objects
 * @returns string[] Array data with string
 */
export function objectToString(data: DataType[]): string[] {
  return data.map((item) => Object.values(item).join(" ").toLowerCase());
}

/**
 * Function to filter data that contains the word given
 * @param word String search
 * @param indexedData Array of string (indexed data)
 * @param originalData Array of objects
 * @returns Object[] Array of a portion of data filtered
 */
export function searchList(
  word: string,
  indexedData: string[],
  originalData: DataType[]
) {
  const found: DataType[] = [];
  indexedData.forEach((item, index) => {
    if (item.indexOf(word) !== -1) {
      found.push(originalData[index]);
    }
  });
  return found;
}
