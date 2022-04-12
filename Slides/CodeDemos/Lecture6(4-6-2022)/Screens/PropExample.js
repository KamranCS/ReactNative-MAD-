import React from "react";
import { View, Text } from "react-native";
function PropExample(props) {
  console.log(props);
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

export default PropExample;
