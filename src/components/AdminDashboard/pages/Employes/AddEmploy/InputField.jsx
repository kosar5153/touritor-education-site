import { ErrorMessage, Field } from "formik";
import React from "react";

const InputField = ({ id, name, placeholder, icon, type }) => {
  return (
    <>
      <div className=" flex  rounded lg:bg-transparent flex-row-reverse items-center  my-3 border-b-2 border-dotted hover:border-solid border-INPUT-BLUE">
        <Field
          placeholder={placeholder}
          id={id}
          name={name}
          className=" w-full p-3  placeholder-Dark-Teal  text-Dark-Teal text-xl focus:text-2xl
              focus:outline-none bg-transparent
              dark:placeholder-green-200/80  dark:text-cyan-50
              "
        />
        <label
          for={name}
          className=" mr-2 text-2xl dark:text-cyan-100/60
         text-Dark-Teal
        "
        >
          {icon}
        </label>
      </div>
      <ErrorMessage name={name}>
        {(err) => <span className=" text-red-300 mb-5 text-[13px]">{err}</span>}
      </ErrorMessage>
    </>
  );
};

export default InputField;
