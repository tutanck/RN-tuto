import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Image
        style={styles.img}
        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
      />
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
  text: {
    color: "darkslateblue",
    fontSize: 24,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
