import React from "react";
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
function Demo(props) {
  let [tinput, settinput] = useState("");
  const handleChangeText = (text) => {
    if (text == "a" || text == "b") {
      settinput(text);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.tInput}
        value={tinput}
        placeholder="Enter Email"
        onChangeText={handleChangeText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tInput: {
    borderBottomColor: "#c34532",
    borderBottomWidth: 2,
  },
});
export default Demo;
