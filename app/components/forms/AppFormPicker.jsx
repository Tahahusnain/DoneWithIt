import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormPicker = ({ placeholder, items, name }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
