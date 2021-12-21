import { OptionType } from "./states";

export type PropType = {
  onSuccess: () => void;
};

export type FormInputs = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  startDate: Date;
  streetLocation: string;
  cityLocation: string;
  stateLocation: OptionType;
  zipCode: number;
  department: OptionType;
};
