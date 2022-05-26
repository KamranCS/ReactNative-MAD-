import React, { useState } from "react";
import MapView, { Callout, Circle, Marker, Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [pin, setPin] = useState();
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.6844,
          longitude: 73.0479,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          draggable
          coordinate={pin}
          title="My Pin Title"
          description="My Pin Description"
          onDrag={(e) => setPin(e.nativeEvent.coordinate)}
        >
          <Callout>
            <Text>This is Callout</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={500}></Circle>
      </MapView>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
