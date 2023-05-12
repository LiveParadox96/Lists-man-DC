import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Flesh from "./../../components/persons/Flesh";
import Button from "./../../components/UI/Button";
import React, { useState } from "react";

type HomeScreenProps = {
  navigation: any;
};

const HeadScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isSecretVisible, setIsSecretVisible] = useState(false);

  const handlePress = () => {
    setIsSecretVisible(!isSecretVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flesh}>
        <Flesh isSecretVisible={isSecretVisible} navigation={navigation} />
      </View>
      <Button onPress={handlePress} isSecretVisible={isSecretVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  flesh: {
    marginBottom: 20,
  },
});
export default HeadScreen;
