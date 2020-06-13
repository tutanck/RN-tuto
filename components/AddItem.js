import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");

  const pushText = () => {
    addItem(text);
    setText("");
  };

  return (
    <View>
      <TextInput
        value={text}
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.btn} onPress={pushText}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: { height: 60, padding: 8, fontSize: 16 },
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

export default AddItem;
