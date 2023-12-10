import React from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refresh, setRefresh] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };
  return (
    <Screen>
      <GestureHandlerRootView>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()} // array of objects
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Message: ", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          refreshing={refresh}
          onRefresh={() => {
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                id: 3,
                title: "T3",
                description: "D3",
                image: require("../assets/mosh.jpg"),
              },
              {
                id: 4,
                title: "T4",
                description: "D4",
                image: require("../assets/mosh.jpg"),
              },
            ]);
          }}
          ItemSeparatorComponent={<ListItemSeparator />}
        />
      </GestureHandlerRootView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 5,
  },
});

export default MessagesScreen;
