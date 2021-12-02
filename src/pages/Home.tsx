import { useMemo, useState } from "react";
import Select from "react-select";
import { states } from "../constants";
import { OptionType } from "../types/states";
import { stateToOption } from "../utils";

function Home() {
  const memStates = useMemo(() => stateToOption(states), [states]);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    memStates[0]
  );

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
              value={selectedOption}
              options={memStates}
              onChange={(opt) => setSelectedOption(opt)}
            />

            <label>Zip Code</label>
            <input type="number" />
          </fieldset>

          <label>Department</label>
          <select name="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
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
