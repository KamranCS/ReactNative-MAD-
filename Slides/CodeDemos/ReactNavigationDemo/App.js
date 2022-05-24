import * as React from "react";
import { Text, View, Button } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
function ContactsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contacts!</Text>
    </View>
  );
}
function TabMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen></Tab.Screen>
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
let names = ["a", "b", "c", "d"];
let [name, setName] = useState("");
const myCalculator = () => {
  for (n of names) {
    setName(n);
  }
};
export default function App() {
  return (
    <>
      {" "}
      <Text>${name}</Text>
      <Button onPress={myCalculator}></Button>
    </>
  );
}
