import React from "react";
import { Text, StyleSheet } from "react-native";
import { useCustomFonts, customFontFamily } from "../config/fontFamily";
const AppText = ({ children, style }) => {
  console.log(children);
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }
  return <Text style={[styles.text, customFontFamily, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default AppText;
