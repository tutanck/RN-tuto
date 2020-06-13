import AsyncStorage from "@react-native-community/async-storage";

const storeData = async (key, value, onError) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    onError(e);
  }
};

const loadDataSync = async (key, onError) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    onError(e);
  }
};

const loadDataAsync = async (key, onError, onData) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;

    onData(data);
  } catch (e) {
    onError(e);
  }
};

export { storeData, loadDataSync, loadDataAsync };
