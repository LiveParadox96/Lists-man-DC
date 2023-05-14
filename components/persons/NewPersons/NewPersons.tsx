import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

type NewPersonsProps = {
  name: string;
  age: number;
  city: string;
  description: string;
};

function NewPersons(props: NewPersonsProps) {
  const { name, age, city, description } = props;
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.characteristic}>
        <Text>Возраст</Text>
        <Text>{age}</Text>
      </View>
      <View style={styles.characteristic}>
        <Text>Местоположение</Text>
        <Text>{city}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  characteristic: {
    width: 250,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  description: {
    width: 250,
    textAlign: "center",
    fontSize: 18,
  },
  descriptionText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default NewPersons;
