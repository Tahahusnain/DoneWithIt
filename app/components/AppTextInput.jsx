import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import colors from "../config/colors";
import { useCustomFonts, customFontFamily } from "../config/fontFamily";

function AppTextInput({ icon, ...otherProps }) {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.conatainer}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={colors.medium}
        />
      )}
      <TextInput style={[styles.input, customFontFamily]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontSize: 18,
    color: colors.dark,
    width: "100%",
    height: "100%",
  },
});

export default AppTextInput;
