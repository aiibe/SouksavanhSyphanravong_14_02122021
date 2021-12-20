import { Data } from "../../types";

export enum ActionType {
  ADD_EMPLOYEE = "ADD_EMPLOYEE",
}

// Action: Add new employee
export function addEmployee(employee: Data) {
  return {
    type: ActionType.ADD_EMPLOYEE,
    payload: employee,
  };
}
