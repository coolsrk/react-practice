import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitting data", data);
  };

  return (
    <div className="form" onSubmit={handleSubmit(onSubmit)}>
      <form>
        <p>First Name</p>
        <input
          type="text"
          placeholder="Enter first name"
          {...register("firstName", {
            required: true,
            minLength: {
              value: 3,
              message: "First name must be at least 3 characters",
            },
            maxLength: {
              value: 10,
              message: "First name must be less than 10 characters",
            },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <br />

        <p>Middle Name</p>
        <input
          type="text"
          placeholder="Enter middle name"
          {...register("middleName")}
        />
        <br />

        <p>Last Name</p>
        <input
          type="text"
          placeholder="Enter last name"
          {...register("lastName")}
        />
        <br />

        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Form;
