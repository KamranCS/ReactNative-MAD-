import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

function setupHighscoreListener(userId) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);
  onValue(reference, (snapshot) => {
    const highscore = snapshot.val().highscore;
    console.log("New high score: " + highscore);
  });
}
const firebaseConfig = {
  apiKey: "AIzaSyBkd0uRFSIi8sIHMWJzKiuK5Tt9p9t6qY0",
  authDomain: "rnfirebasedemo-16f15.firebaseapp.com",
  databaseURL: "https://rnfirebasedemo-16f15-default-rtdb.firebaseio.com/",
  projectId: "rnfirebasedemo-16f15",
  storageBucket: "rnfirebasedemo-16f15.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};
function storeHighScore(userId, score) {
  const db = getDatabase();
  console.log(db);
  const reference = ref(db, "users/" + userId);
  set(reference, {
    highscore: score,
  })
    .then(console.log("success"))
    .catch(function (errors) {
      console.log("error");
    });
}

export default function App() {
  initializeApp(firebaseConfig);
  storeHighScore(123, 25);
  setupHighscoreListener(123);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
