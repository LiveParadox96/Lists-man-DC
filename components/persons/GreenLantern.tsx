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

const GreenLantern: React.FC<FleshProps> = ({
  navigation,
  isSecretVisible,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  
  const oldImage = require("./../../assets/Hall_Djordon.png");
  const newImage = require("./../../assets/green_latern_old.png");
  const imagePerson = isSecretVisible ? newImage : oldImage;

  useEffect(() => {
    const newName = isSecretVisible ? "Green Lantern" : "Hal Jordan";
    const newDescription = isSecretVisible
      ? "Полёт. С помщью кольца можёт создавать что угодно"
      : "Род деятельности - пилот военного истрибителя";
    const newAge = 32;
    const newCity = "планета Земля";
    setName(newName);
    setDescription(newDescription);
    setAge(newAge);
    setCity(newCity);
  }, [isSecretVisible]);
  return (
    <View style={styles.person}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Green Lantern", { itemId: 1 })}
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

export default GreenLantern;

// Перед тем как стать Чудо-женщиной, она была Дианой — принцессой амазонок, обученной быть непобедимой воительницей. И когда на берегах ограждённого от внешнего мира её родного острова терпит крушение американский пилот и рассказывает о масштабном конфликте, бушующем во внешнем мире, Диана покидает дом, чтобы противостоять злу. Сражаясь бок о бок с человеком в войне за мир, Диана обнаружит всю полноту своей власти и своё истинное предназначение.
