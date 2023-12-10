import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <View>
        <MaterialCommunityIcons
          style={styles.icon}
          name="trash-can"
          size={35}
          color={colors.white}
        />
        <AppText style={styles.text}>Delete</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  icon: {
    paddingLeft: 6,
  },

  text: {
    color: colors.white,
  },
});
export default ListItemDeleteAction;
