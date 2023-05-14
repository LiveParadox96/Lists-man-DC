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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");

  const oldImage = require("./../../assets/wander_head.png");
  const newImage = require("./../../assets/ww_head_old_back.png");
  const imagePerson = isSecretVisible ? newImage : oldImage;
  useEffect(() => {
    const newName = isSecretVisible ? "Wonder Woman" : "Diana Prince";
    const newDescription = isSecretVisible
      ? "Дочь Зевса, полубогиня. Сильна, вынослива,  имеет, имеет браслеты Победы"
      : "Род деятельности - неизвестно";
    const newAge = 5000;
    const newCity = "Олимп";
    setName(newName);
    setDescription(newDescription);
    setAge(newAge);
    setCity(newCity);
  }, [isSecretVisible]);
  return (
    <View style={styles.person}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Wonder Woman", { itemId: 1 })}
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
});

export default Flesh;

