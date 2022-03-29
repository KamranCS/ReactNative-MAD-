import React from "react-native";
import { View, Button } from "react-native";
import { useState } from "react/cjs/react.production.min";

function Counter(props) {
  let [counter, setCounter] = useState(0);
  const handleCounter = () => {
    console.log(counter);
  };
  return (
    <View style={{ flex: 1 }}>
      
    </View>
  );
}

export default Counter;
