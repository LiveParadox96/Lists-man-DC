import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isSecretVisible: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, isSecretVisible }) => {
  const buttonTitle = isSecretVisible ? "Скрыть личность" : "Раскрыть личность";

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;