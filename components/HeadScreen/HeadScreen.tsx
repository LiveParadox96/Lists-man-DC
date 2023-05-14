import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Flesh from "./../../components/persons/Flesh";
import ButtonArrayNext from "../UI/ButtonArrayNext";
import ButtonArrayPrev from "../UI/ButtonArrayPrev";
import WanderWumen from "../persons/WanderWumen";
import GreenLantern from "../persons/GreenLantern";
import Button from "./../UI/Button";
import RadioButton from "../UI/RadioButton";

type Slide = {
  component: JSX.Element;
};

type HeadScreenProps = {
  navigation: any;
};

const HeadScreen: React.FC<HeadScreenProps> = ({ navigation }) => {
  const [isSecretVisible, setIsSecretVisible] = useState(false);
  const slides: Slide[] = [
    {
      component: (
        <Flesh isSecretVisible={isSecretVisible} navigation={navigation} />
      ),
    },
    {
      component: (
        <WanderWumen
          isSecretVisible={isSecretVisible}
          navigation={navigation}
        />
      ),
    },
    {
      component: (
        <GreenLantern
          isSecretVisible={isSecretVisible}
          navigation={navigation}
        />
      ),
    },
    // Добавьте дополнительные слайды здесь
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handlePress = () => {
    setIsSecretVisible(!isSecretVisible);
  };

  return (
    <View style={styles.container}>
      <View>{slides[currentSlide].component}</View>
      <View style={styles.buttonContainer}>
        <ButtonArrayPrev onPress={prevSlide} />
        <ButtonArrayNext onPress={nextSlide} />
      </View>
      <View style={styles.buttonSecret}>
        <Button onPress={handlePress} isSecretVisible={isSecretVisible} />
      </View>
      <View style={styles.radioButtonContainer}>
        {slides.map((_, index) => (
          <RadioButton key={index} active={currentSlide === index} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9D3B3",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    right: 0,
    bottom: 400,
    paddingHorizontal: 20,
  },
  buttonSecret: {
    position: "absolute",
    bottom: 130,
    flexDirection: "column",
    zIndex: 1,
  },
  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 60,
  },
});

export default HeadScreen;
