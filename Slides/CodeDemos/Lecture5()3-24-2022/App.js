import { StyleSheet, View, Text, Platform } from "react-native";
import EncapsulateText from "./Components/EncapsulateText";
export default function App() {
  return (
    <View style={styles.topContainer}>
      <View style={[styles.innerContainer, styles.secondStyle]}></View>
      <EncapsulateText>This is a dummy text</EncapsulateText>
      <EncapsulateText customColor="red">This is second text</EncapsulateText>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: "lightgreen",
    fontSize: 50,
  },
  innerContainer: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  secondStyle: {
    borderColor: "black",
    borderWidth: 10,
    borderBottomColor: "red",
    backgroundColor: Platform.OS === "web" ? "red" : "yellow",
  },
});
