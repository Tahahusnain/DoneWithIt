import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";
import { TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ListItems = ({ title, subTitle, image, onPress, renderRightActions }) => {
  console.log("hello list items", title, subTitle);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {<Image style={styles.image} source={image} />}
          <View style={styles.titleContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  titleContainer: {
    marginLeft: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "800",
  },
});

export default ListItems;
