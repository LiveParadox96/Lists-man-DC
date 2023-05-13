import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

type ButtonArrayNextProps = {
  onPress: () => void;
};

const ButtonArrayNext: React.FC<ButtonArrayNextProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>&gt;</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ButtonArrayNext;
