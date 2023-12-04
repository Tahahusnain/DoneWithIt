import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onpress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onpress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 50,
    backgroundColor: colors.primary,
    padding: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
