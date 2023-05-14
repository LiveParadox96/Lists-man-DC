import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

type ButtonArrayPrevProps = {
  onPress: () => void;
};

const ButtonArrayPrev: React.FC<ButtonArrayPrevProps> = React.memo(
  ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>&lt;</Text>
      </TouchableOpacity>
    );
  }
);

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

export default ButtonArrayPrev;
