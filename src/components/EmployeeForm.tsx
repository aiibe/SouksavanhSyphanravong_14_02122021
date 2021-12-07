import { useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { departmentOptions, states } from "../constants";
import { EmployeeFormPropsType, FormInputs } from "../types/form";
import { stateToOption } from "../utils";

function EmployeeForm({ onSuccess }: EmployeeFormPropsType) {
  const memStates = useMemo(() => stateToOption(states), [states]); // memoized
  const { register, handleSubmit, control } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);

    // onSuccess()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstname">First Name</label>
      <input id="firstname" type="text" {...register("firstName")} />

      <label htmlFor="lastname">Last Name</label>
      <input id="lastname" type="text" {...register("lastName")} />

      <label htmlFor="birthdate">Date of Birth</label>
      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, value } }) => (
          <DatePicker id="birthdate" selected={value} onChange={onChange} />
        )}
      />

      <label htmlFor="startdate">Start Date</label>
      <Controller
        control={control}
        name="startDate"
        render={({ field: { onChange, value } }) => (
          <DatePicker id="startdate" selected={value} onChange={onChange} />
        )}
      />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" {...register("streetLocation")} />

        <label htmlFor="city">City</label>
        <input id="city" type="text" {...register("cityLocation")} />

        <label>State</label>
        <select {...register("stateLocation")}>
          {memStates.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <label htmlFor="zipcode">Zip Code</label>
        <input id="zipcode" type="number" {...register("zipCode")} />
      </fieldset>

      <label>Department</label>
      <select {...register("department")}>
        {departmentOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <button className="submit" type="submit">
        Save
      </button>
    </form>
  );
}

export default EmployeeForm;
