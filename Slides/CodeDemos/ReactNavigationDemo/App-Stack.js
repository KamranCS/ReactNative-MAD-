import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**Home Screen */
function HomeScreen({ route, navigation }) {
  let { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>{otherParam}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: otherParam,
          });
        }}
      />
    </View>
  );
}
/*Details Screen */
function DetailsScreen({ route, navigation }) {
  let { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
      <TextInput
        onChangeText={(text) => navigation.setParams({ otherParam: text })}
      />
      <Button
        title="Go to Details---Again"
        onPress={() => navigation.push("Details")}
      />

      <Button title="Go Back" onPress={() => navigation.popToTop()} />
      {/**Navigate back to the Home Screen with params */}
      <Button
        title="Go Back(Params)"
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: { otherParam: otherParam },
          })
        }
      />
    </View>
  );
}
//Create Stack
const Stack = createNativeStackNavigator(); //{screen, navigator}
/**App Component */
export default function App() {
  return (
    <NavigationContainer>
      {/*Navigator contains Screen elements as its children*/}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "Overview",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ otherParam: "Initial value" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
