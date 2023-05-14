import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import NewPersons from "./NewPersons/NewPersons";

interface FleshProps {
  navigation: StackNavigationProp<any, any>;
  isSecretVisible: boolean;
}

const Flesh: React.FC<FleshProps> = ({ navigation, isSecretVisible }) => {
  const oldImage = require("./../../assets/Barry.png");
  const newImage = require("./../../assets/flesh.png");
  const imagePerson = isSecretVisible ? newImage : oldImage;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");

  useEffect(() => {
    const newDescription = isSecretVisible
      ? "Самый быстрый человек на Земле. Создатель Спидфорса"
      : "Судмедэксперт, криминалист, учёный. Имеет свой научный центр";
    const newName = isSecretVisible ? "Flesh" : "Barry Allen";
    const newAge = 26;
    const newCity = "Ванкувер";

    setName(newName);
    setDescription(newDescription);
    setAge(newAge);
    setCity(newCity);
  }, [isSecretVisible]);

  return (
    <View style={styles.person}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Flesh", { itemId: 1 })}
      >
        <Image source={imagePerson} style={styles.photo} />
      </TouchableHighlight>
      <NewPersons name={name} age={age} city={city} description={description} />
    </View>
  );
};

const styles = StyleSheet.create({
  person: {
    flexDirection: "column",
    alignItems: "center",
    height: 300,
  },
  photo: {
    height: 180,
    width: 150,
    alignSelf: "center",
  },
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

export default Flesh;
