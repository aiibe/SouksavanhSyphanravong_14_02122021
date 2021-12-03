import { useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { departmentOptions, states } from "../constants";
import { FormInputs } from "../types/form";
import { stateToOption } from "../utils";

function Home() {
  const memStates = useMemo(() => stateToOption(states), [states]);
  const { register, handleSubmit, control } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input type="text" {...register("firstName")} />

          <label>Last Name</label>
          <input type="text" {...register("lastName")} />

          <label>Date of Birth</label>
          <Controller
            control={control}
            name="birthDate"
            render={({ field: { onChange, value } }) => (
              <DatePicker selected={value} onChange={onChange} />
            )}
          />

          <label>Start Date</label>
          <Controller
            control={control}
            name="startDate"
            render={({ field: { onChange, value } }) => (
              <DatePicker selected={value} onChange={onChange} />
            )}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label>Street</label>
            <input type="text" {...register("streetLocation")} />

            <label>City</label>
            <input type="text" {...register("cityLocation")} />

            <label>State</label>
            <select {...register("stateLocation")}>
              {memStates.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>

            <label>Zip Code</label>
            <input type="number" {...register("zipCode")} />
          </fieldset>

          <label>Department</label>
          <select {...register("department")}>
            {departmentOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
}

export default Home;
