import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const List = ({ title, subTitle, image, IconComponent }) => {
  return (
    <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  titleContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "800",
  },
});

export default List;
