import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import { useState } from "react";
import Intro from "./Components/intro";
const App = () => {
  let [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter += 1));
    console.log(counter);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button title="Press me" onPress={handleClick} />
      </View>
      <View>
        <Text>{counter}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});

export default App;
