import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [userName, setUserName] = useState("");
  // let val=await AsyncStorage.getItem("username")
  //setUserName(val);
  AsyncStorage.getItem("username").then((val) => {
    ///console.log(val);
    setUserName(val);
  });
  let [multidata, setmultidata] = useState({});

  multidata = AsyncStorage.multiGet(["username", "dummy"]);
  multidata.then((val) => {
    console.log(val);
  });
  /**Store Data of Field in Async Storage */
  const storeData = async (value) => {
    //const username = ["username", value];
    //const dummy = ["dummy", `a dummy message from ${username}`];
    setUserName(value);
    try {
      await AsyncStorage.setItem("username", value);
      //await AsyncStorage.setItem("username", value);
    } catch (e) {
      console.log("Something wrong");
    }
  };

  return (
    <View style={styles.container}>
      <Text>User Name</Text>
      <TextInput
        value={userName}
        style={styles.tInputName}
        onChangeText={storeData}
      ></TextInput>
      <Text>Second Message</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tInputName: {
    borderBottomColor: "red",
    borderBottomWidth: 3,
  },
});
