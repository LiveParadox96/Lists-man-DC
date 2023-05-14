import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const FleshInfo = React.memo(() => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./../../assets/wander_background.png")}
      >
        <View style={styles.content}>
          <Text style={styles.name}>Имя: Диана</Text>
          <Text style={styles.occupation}>Род деятельности: Неизвестно.</Text>
          <Text style={styles.gainingStrength}>
            Диана "родилась" на Темескире, где слепили её из глины, после чего
            Зевс даровал ей жизнь.
          </Text>
          <Text style={styles.enemy}>Главный враг: Гепарда,Арес</Text>
          <Text style={styles.description}>
            Шесть членов греческого Пантеона связали душу с «формой», даруя той
            жизнь. Каждый из шести преподнес Диане дар: Деметра – великую силу;
            Афина – мудрость и отвагу; Артемида – сердце охотника и связь с
            животными; Афродита – красоту и любящее сердце; Гестия – родство с
            огнем; Гермес – скорость и способность летать. Диана росла,
            окруженная легионом сестер и матерей.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    opacity: 0.85,
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
