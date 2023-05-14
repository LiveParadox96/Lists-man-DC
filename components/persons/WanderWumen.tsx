import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

interface FleshProps {
  navigation: StackNavigationProp<any, any>;
  isSecretVisible: boolean;
}

const Flesh: React.FC<FleshProps> = ({ navigation, isSecretVisible }) => {
  const description = isSecretVisible
    ? "Дочь Зевса, полубогиня. Сильна, вынослива,  имеет, имеет браслеты Победы"
    : "Род деятельности - неизвестно";
  const oldImage = require("./../../assets/wander_head.png");
  const newImage = require("./../../assets/ww_head_old_back.png");
  const name = isSecretVisible ? "Wonder Woman" : "Diana Prince";
  const imagePerson = isSecretVisible ? newImage : oldImage;

  return (
    <View style={styles.person}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Wonder Woman", { itemId: 1 })}
      >
        <Image source={imagePerson} style={styles.photo} />
      </TouchableHighlight>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.characteristic}>
        <Text>Возраст</Text>
        <Text>5000 лет</Text>
      </View>
      <View style={styles.characteristic}>
        <Text>Местоположение</Text>
        <Text>Нью Йорк</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
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

// Перед тем как стать Чудо-женщиной, она была Дианой — принцессой амазонок, обученной быть непобедимой воительницей. И когда на берегах ограждённого от внешнего мира её родного острова терпит крушение американский пилот и рассказывает о масштабном конфликте, бушующем во внешнем мире, Диана покидает дом, чтобы противостоять злу. Сражаясь бок о бок с человеком в войне за мир, Диана обнаружит всю полноту своей власти и своё истинное предназначение.
