import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Demo from "./Screens/demo";
import PropExample from "./Screens/PropExample";
import Tinputdemo from "./Screens/Tinputdemo";

/*const App = () => {
  const [greeting, setGreeting] = React.useState("Welcome to React");
  const [isShow, setShow] = React.useState(true);

  const handleToggle = () => {
    setShow(!isShow);
  };

  const handleChange = (text) => {
    setGreeting(text);
  };

  return (
    <View>
      <Button onClick={handleToggle} title="Toggle"></Button>

      <TextInput value={greeting} onChangeText={handleChange} />

      {isShow ? <Welcome text={greeting} /> : null}
    </View>
  );
};*/
const App = () => {
  const [greeting, setGreeting] = React.useState("Welcome to React");
  const [isShow, setShow] = React.useState(true);

  const handleToggle = () => {
    setShow(!isShow);
  };

  const handleChange = (text) => {
    setGreeting(text);
  };

  return (
    <View>
      <CustomButton onClick={handleToggle} title="Toggle"></CustomButton>

      <TextInput value={greeting} onChangeText={handleChange} />

      {isShow ? <Welcome text={greeting} /> : null}
    </View>
  );
};
const Welcome = ({ text }) => {
  return <Text>{text}</Text>;
};
const CustomButton = ({ label, onClick }) => {
  return <Button onClick={onClick} title={label}></Button>;
};
/**Custom Button Component */
/*const CustomButton = ({ label }) => {
  const [isShow, setShow] = useState(true);

  const handleToggle = () => {
    setShow(!isShow);
  };

  return <Button onClick={handleToggle} title={label}></Button>;
};*/
export default App;
