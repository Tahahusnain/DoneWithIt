import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screen/LoginScreen";
import ListingEditScreen from "./app/screen/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

{
  /* <AppPicker
selectedItem={category}
onSelectItem={(item) => setCategory(item)}
items={categories}
icon="apps"
placeholder="Category"
/> */
}
