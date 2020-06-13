import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import { nanoid } from "nanoid/non-secure";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [items, setItems] = useState([]);

  const clearItems = () => {
    setItems([]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item !");
    } else {
      setItems((prevItems) => {
        return [...prevItems, { id: nanoid(), text: text }];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />

      <TouchableOpacity style={styles.btn} onPress={clearItems}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Clear Items
        </Text>
      </TouchableOpacity>

      <AddItem addItem={addItem} />

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});
