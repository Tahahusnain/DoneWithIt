import { Platform } from "react-native";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";

export const useCustomFonts = () => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

  return fontsLoaded;
};

export const customFontFamily = {
  fontFamily: Platform.OS === "android" ? "Nunito_400Regular" : "Avenir",
};
