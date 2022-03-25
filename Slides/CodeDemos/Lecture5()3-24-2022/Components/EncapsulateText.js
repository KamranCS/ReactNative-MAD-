import React from "react-native";
import { StyleSheet, Text } from "react-native";
export default function EncapsulateText(props) {
  return <Text style={styles.textStyle}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 500,
    color: "blue",
  },
});
