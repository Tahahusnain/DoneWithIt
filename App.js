import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import SaleItem from "./app/screen/SaleItem";
import MessagesScreen from "./app/screen/MessagesScreen";
import ListingDetailesScreen from "./app/screen/ListingDetailesScreen";

export default function App() {
  return <MessagesScreen  />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
