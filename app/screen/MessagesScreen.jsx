import React from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()} // array of objects
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message: ", item)}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 5,
  },
});

export default MessagesScreen;
