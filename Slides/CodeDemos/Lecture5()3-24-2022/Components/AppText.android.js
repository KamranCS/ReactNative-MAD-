import React from "react";
import reactDom from "react-dom";
import { Text, StyleSheet, Platform } from "react-native";
function AppText(props) {
  return <Text style={styles.myStyle}>{props.children}</Text>;
}
const styles = StyleSheet.create({
  myStyle: {
    color: "green",
  },
});
export default AppText;
