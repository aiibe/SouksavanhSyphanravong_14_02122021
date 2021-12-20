import { getItems, setItems } from "../../../utils/storage";
import { Action, Data } from "../../types";
import { ActionType } from "./actions";

// Load data from localStorage as initial state
const employees = getItems("employees");
const initState = employees ? employees : setItems("employees", []);

function reducer(state: Data[] = initState, action: Action) {
  switch (action.type) {
    case ActionType.ADD_EMPLOYEE:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default reducer;
