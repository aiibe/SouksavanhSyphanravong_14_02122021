import { combineReducers } from "redux";
import employeeReducer from "../reducers/employees";

const reducers = combineReducers({
  employees: employeeReducer,
});

export default reducers;
