import React from "react";
import { View, StyleSheet } from "react-native";

type RadioButtonProps = {
  active: boolean;
};

const RadioButton: React.FC<RadioButtonProps> = ({ active }) => {
  return (
    <View style={styles.radioButton}>
      <View
        style={[
          styles.radioButtonInner,
          active && styles.radioButtonInnerActive,
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  radioButton: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  radioButtonInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "white",
    alignSelf: "center",
    position: "absolute",
    bottom: 2,
  },
  radioButtonInnerActive: {
    backgroundColor: "gray",
  },
});
export default RadioButton;
