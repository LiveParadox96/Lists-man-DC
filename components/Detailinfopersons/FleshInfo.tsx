import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const FleshInfo = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./../../assets/backgound_flesh.png")}
      >
        <View style={styles.content}>
          <Text style={styles.name}>Имя: Барри Ален</Text>
          <Text style={styles.occupation}>Род занятия: Криминалист.</Text>
          <Text style={styles.gainingStrength}>
            Получение сил: Вспышка тёмной материи, которая справоцировала
            ударить молнию в Барри Алена
          </Text>
          <Text style={styles.enemy}>
            Главный враг: Обратный Флеш, Эобард Тоун
          </Text>
          <Text style={styles.description}>
            В детстве Барри Аллен стал свидетелем убийства своей матери, в
            котором несправедливо обвинили его отца. Работая криминалистом,
            Аллен пытается раскрыть правду об убийстве матери, что приводит его
            к ускорителю частиц ученого Харрисона Уэллса. После взрыва
            ускорителя частиц в Аллена попадает молния, из-за чего он впадает в
            кому на 9 месяцев. Проснувшись, он узнаёт, что имеет способность
            двигаться на сверхчеловеческих скоростях.
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
