import { format } from "date-fns";
import { useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { departmentOptions, states } from "../constants";
import { addEmployee } from "../store/reducers/employees/actions";
import { FormInputs, PropType } from "../types/form";
import { stateToOption } from "../utils";

function Form({ onSuccess }: PropType) {
  const memStates = useMemo(() => stateToOption(states), [states]); // memoized
  const { register, handleSubmit, control, reset } = useForm<FormInputs>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { birthDate, startDate, zipCode, stateLocation, department } = data;

    // Save data in the right format
    const serializeData = {
      ...data,
      birthDate: format(birthDate, "MM/dd/yyyy"),
      startDate: format(startDate, "MM/dd/yyyy"),
      zipCode: Number(zipCode),
      stateLocation: stateLocation.value,
      department: department.label,
    };

    // Add new employee data
    dispatch(addEmployee(serializeData));

    // Success, open modal
    onSuccess();

    // Reset form
    reset();
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
          <DatePicker
            id="birthdate"
            selected={value}
            onChange={onChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        )}
      />

      <label htmlFor="startdate">Start Date</label>
      <Controller
        control={control}
        name="startDate"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            id="startdate"
            selected={value}
            onChange={onChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        )}
      />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" {...register("streetLocation")} />

        <label htmlFor="city">City</label>
        <input id="city" type="text" {...register("cityLocation")} />

        <label>State</label>
        <Controller
          control={control}
          name="stateLocation"
          defaultValue={memStates[0]}
          render={({ field }) => (
            <Select
              {...field}
              defaultValue={memStates[0]}
              isClearable={false}
              isSearchable={false}
              options={memStates}
            />
          )}
        />

        <label htmlFor="zipcode">Zip Code</label>
        <input id="zipcode" type="number" {...register("zipCode")} />
      </fieldset>

      <label>Department</label>
      <Controller
        control={control}
        name="department"
        defaultValue={departmentOptions[0]}
        render={({ field }) => (
          <Select
            {...field}
            defaultValue={departmentOptions[0]}
            isClearable={false}
            isSearchable={false}
            options={departmentOptions}
          />
        )}
      />

      <button className="submit" type="submit">
        Save
      </button>
    </form>
  );
}

export default Form;
