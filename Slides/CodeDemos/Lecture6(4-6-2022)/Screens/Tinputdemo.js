import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Switch,
  FlatList,
  Pressable,
} from "react-native";
const Item = ({ title }) => (
  <View style={styles.item}>
    <Pressable
      onPress={() => console.log("pressed")}
      onLongPress={() => console.log("Long pressed")}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  </View>
);
const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 3,
        width: "100%",
        backgroundColor: "black",
      }}
    />
  );
};
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
function Tinputdemo(props) {
  let [userName, setUserName] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const handleValueChange = (inp) => {
    setUserName(inp);
  };
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No Items</Text>}
        ListHeaderComponent={<Text>Header</Text>}
        ItemSeparatorComponent={FlatListItemSeparator}
        ListFooterComponent={<Text>Footer</Text>}
        ListFooterComponentStyle={{ borderWidth: 2, alignItems: "center" }}
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
export default Tinputdemo;
