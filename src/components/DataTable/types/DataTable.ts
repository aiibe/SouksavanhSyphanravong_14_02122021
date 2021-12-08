export type PropType = {
  showingLength: number[];
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
