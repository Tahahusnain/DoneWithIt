import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { useCustomFonts, customFontFamily } from "../config/fontFamily";
import { TouchableWithoutFeedback } from "react-native";
import { FlatList } from "react-native";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const fontsLoaded = useCustomFonts();
  const [modalVisible, setModalVisible] = useState(false);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.conatainer}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={colors.medium}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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
  text: {
    flex: 1,
  },
});

export default AppPicker;
