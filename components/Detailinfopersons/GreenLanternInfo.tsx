import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const FleshInfo = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./../../assets/bacground_green_lathern.png")}
      >
        <View style={styles.content}>
          <Text style={styles.name}>Имя: Hal Jordan</Text>
          <Text style={styles.occupation}>
            Род деятельности: Пилот военного истрибителя.
          </Text>
          <Text style={styles.gainingStrength}>
            Хэлл, прогуливаясь, увидел "летающую тарелку", которая была
            выглядела очень плохо. Подойдя к ней, он обнаружил там какого-то
            инопланетянина, с пальца которого вылетело кольцо для поиска нового
            достойного владельца. Кольцо не так долго искало достойного человека
            и им стал Hal Djordon
          </Text>
          <Text style={styles.enemy}>Главный враг: Паралакс</Text>
          <Text style={styles.description}>
            Выбирая замену Абин Суру, кольцо силы остановило выбор на Хэле из-за
            его возможности противостоять страху. Кольцо и его возможности стали
            понятны Джордану, и он унаследовал костюм Зелёного Фонаря. Став
            своеобразным галактическим полицейским, он получил задание охранять
            и защищать все жизни в Секторе 2814 . Скоро он узнал, что вселенную
            охраняют ещё 3600 других фонарей, обученных и находящихся на службе
            у мистических существ, зовущихся Стражами . Хэл тренировался у
            лучших представителей Корпуса, включая сержанта-инструктора Киловога
            и его наставника Синестро.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    opacity: 0.8,
  },
  content: {
    flex: 1,
    width: 80 + "%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 1, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: "black",
  },
  occupation: {
    fontSize: 18,
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 1, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: "black",
  },
  gainingStrength: {
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 1, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: "black",
  },
  enemy: {
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 1, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: "black",
  },
  description: {
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 1, 1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: "black",
  },
});

export default FleshInfo;
