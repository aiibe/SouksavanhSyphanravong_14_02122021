export type PropType = {
  showingLength: number[];
  columns: ColumnType[];
  rows: DataType[];
};

export type DataType = {
  [key: string]: string | number;
};

export type RowPropType = {
  index: number;
  data: DataType;
};

export type ColumnType = {
  label: string;
  field: string;
};

export type TableBodyPropType = {
  data: DataType[];
  showLength: number;
};

export type TableHeadPropType = {
  columns: ColumnType[];
};

export type ShowInfoPropType = {
  showing: number;
  total: number;
};
