import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface ButtonProps {
  onPress: () => void;
  isSecretVisible: boolean;
}

const Button: React.FC<ButtonProps> = React.memo(
  ({ onPress, isSecretVisible }) => {
    const buttonTitle = isSecretVisible
      ? "Скрыть личность"
      : "Раскрыть личность";

    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
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

export default Button;
