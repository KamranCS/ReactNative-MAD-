import {
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
  StatusBar,
  Text,
} from "react-native";

const Greeting = (props) => {
  console.log(props);
  const handleTextClick = () => {
    console.log("text is clicked");
  };
  return (
    <View>
      <Text numberOfLines={1} onPress={handleTextClick}>
        I am tesxt on multiple line and i will be displayed based on the number
        of lined prop
      </Text>
      <TouchableOpacity
        onPress={() => {
          console.log("images is clicked");
        }}
      >
        <Image
          style={{ width: 200, height: 200 }}
          source={require("./assets/icon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="kamran" profession="teaching" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
