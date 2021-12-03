export type EmployeeFormPropsType = {
  onSuccess: () => void;
};

export type FormInputs = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  startDate: Date;
  streetLocation: string;
  cityLocation: string;
  stateLocation: string;
  zipCode: number;
  department: string;
};
