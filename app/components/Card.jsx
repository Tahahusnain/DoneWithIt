import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 35,
    backgroundColor: colors.white,
    marginBottom: 20,
    elevation: 10,
    overflow: "hidden",
  },
  cardImage: {
    height: 200,
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 5,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
