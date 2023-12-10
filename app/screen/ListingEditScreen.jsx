import React from "react";
import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import { StyleSheet } from "react-native";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Clothing",
    value: 1,
  },
  {
    label: "Furniture",
    value: 2,
  },
  {
    label: "Camera",
    value: 3,
  },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log("asdsd =>", values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />
        <AppFormPicker
          placeholder="Category"
          name="category"
          items={categories}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          maxLength={255}
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
  },
});
export default ListingEditScreen;
