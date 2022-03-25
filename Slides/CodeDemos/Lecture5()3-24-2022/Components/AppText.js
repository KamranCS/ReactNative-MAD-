import React from "react";
import reactDom from "react-dom";
import { Text, StyleSheet, Platform } from "react-native";
function AppText(props) {
  console.log(props);
  return <Text style={styles.myStyle}>{props}</Text>;
}
const styles = StyleSheet.create({
  myStyle: {
    color: Platform.OS === "android" ? "black" : "red",
  },
});
export default AppText;
