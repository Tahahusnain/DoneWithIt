import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";

const SaleItem = () => {
  return (
    <View style={styles.cardContainer}>
      <Card
        title="Red jacket for Sale !"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
      <Card
        title="Red jacket for Sale !"
        subTitle="$100"
        image={require("../assets/couch.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 40,
    paddingTop: 100,
  },
});

export default SaleItem;
