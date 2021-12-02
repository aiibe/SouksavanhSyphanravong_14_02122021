import { useMemo, useState } from "react";
import Select from "react-select";
import { departmentOptions, states } from "../constants";
import { OptionType } from "../types/states";
import { stateToOption } from "../utils";

function Home() {
  const memStates = useMemo(() => stateToOption(states), [states]);
  const [selectedState, setSelectedState] = useState<OptionType | null>(
    memStates[0]
  );
  const [selectedDepartment, setSelectedDepartment] =
    useState<OptionType | null>(departmentOptions[0]);

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form>
          <label>First Name</label>
          <input type="text" />

          <label>Last Name</label>
          <input type="text" />

          <label>Date of Birth</label>
          <input type="text" />

          <label>Start Date</label>
          <input type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label>Street</label>
            <input type="text" />

            <label>City</label>
            <input type="text" />

            <label>State</label>
            <Select
              value={selectedState}
              options={memStates}
              onChange={(opt) => setSelectedState(opt)}
            />

            <label>Zip Code</label>
            <input type="number" />
          </fieldset>

          <label>Department</label>
          <Select
            value={selectedDepartment}
            options={departmentOptions}
            onChange={(opt) => setSelectedDepartment(opt)}
          />
        </form>
        <button>Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
}

export default Home;
