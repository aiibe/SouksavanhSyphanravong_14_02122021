import { OptionType, StateType } from "../types/states";

// Convert states to options for select input
export function stateToOption(states: StateType[]): OptionType[] {
  return states.map(({ name, abbreviation }) => ({
    value: abbreviation,
    label: name,
  }));
}
