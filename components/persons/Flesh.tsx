import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';

interface FleshProps {
  navigation: StackNavigationProp<any, any>;
  isSecretVisible: boolean;
}

const Flesh: React.FC<FleshProps> = ({ navigation,  isSecretVisible }) => {
  const description = isSecretVisible
    ? "Самый быстрый человек на Земле. Создатель Спидфорса"
    : "Судмедэксперт, криминалист";
  const oldImage = require("./../../assets/Barry.png");
  const newImage = require("./../../assets/flesh.png");
  const name = isSecretVisible ? "Flesh" : "Barry Allen";
  const imagePerson = isSecretVisible ? newImage : oldImage;


  return (
    <View style={styles.person}>
      <TouchableHighlight onPress={() => navigation.navigate('Details', { itemId: 1 })}>
        <Image source={imagePerson} style={styles.photo} />
      </TouchableHighlight>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.characteristic}>
        <Text>Возраст</Text>
        <Text>26 лет</Text>
      </View>
      <View style={styles.characteristic}>
        <Text>Местоположение</Text>
        <Text>Ванкувер</Text>
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