import reducers from "./reducers";

export type State = ReturnType<typeof reducers>;

export type Data = {
  [key: string]: string | number;
};

export type Action = {
  type: string;
  payload: Data;
};
