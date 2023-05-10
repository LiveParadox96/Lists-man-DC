import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Flesh from "./components/persons/Flesh";
import Button from "./components/UI/Button";
import React, { useState } from "react";
// import FleshImage from "./components/images/flesh.png";
// import BarryImage from "./components/images/Barry.png";

const App = () => {
  const [isSecretVisible, setIsSecretVisible] = useState(false);

  const handlePress = () => {
    if (isSecretVisible) {
      const newImage = require("./assets/flesh.png");
      setIsSecretVisible(false);
    } else {
      const oldImage = require("./assets/Barry.png");
      setIsSecretVisible(true);
    }
    console.log("Кнопка нажата");
  };

  return (
    <View style={styles.container}>
      <Flesh
        handlePress={handlePress}
        isSecretVisible={isSecretVisible}
      />
      <Button
        onPress={handlePress}
        title="Раскрыть личность"
        isSecretVisible={isSecretVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
