import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Flesh from "./../../components/persons/Flesh";
import Button from "./../../components/UI/Button";
import React, { useState, useRef } from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import WanderWumen from "../persons/WanderWumen";
import ButtonArrayPrev from "../UI/ButtonArrayPrev";
import ButtonArrayNext from "../UI/ButtonArrayNext";
import GreenLantern from "../persons/GreenLantern";

type HomeScreenProps = {
  navigation: any;
};

const HeadScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isSecretVisible, setIsSecretVisible] = useState(false);
  const swiperRef = useRef<SwiperFlatList | null>(null);
  const [countSlider, setCountSlider] = useState(0);
  const slides = [
    <Flesh isSecretVisible={isSecretVisible} navigation={navigation} />,
    <WanderWumen isSecretVisible={isSecretVisible} navigation={navigation} />,
    <GreenLantern isSecretVisible={isSecretVisible} navigation={navigation} />,
    // Добавьте дополнительные слайды здесь
  ];
  const totalSlides = slides.length;
  console.log(`${countSlider} - 'длина'`);
  console.log(countSlider);

  const nextSlider = () => {
    setCountSlider((count) => count - 1 + totalSlides);
  };

  const prevSlider = () => {
    setCountSlider((count) => count - 1 + totalSlides);
  };

  const handlePress = () => {
    setIsSecretVisible(!isSecretVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.contentContainer}>
        <SwiperFlatList
          index={countSlider}
          showPagination
          ref={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {slides.map((slide, index) => (
            <View key={index} style={styles.slide}>
              {slide}
            </View>
          ))}
        </SwiperFlatList>
        <View style={styles.buttonContainer}>
          <ButtonArrayPrev
            onPress={() => {
              if (swiperRef.current) {
                prevSlider();
                swiperRef.current.scrollToIndex({ index: countSlider - 1 });
              }
            }}
          />
          <ButtonArrayNext
            onPress={() => {
              if (swiperRef.current) {
                nextSlider();
                swiperRef.current.scrollToIndex({ index: countSlider + 1 });
              }
            }}
          />
        </View>
        <View style={styles.buttonSecret}>
          <Button onPress={handlePress} isSecretVisible={isSecretVisible} />
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9D3B3",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  slide: {
    width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignSelf: "center",
    position: "absolute",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 10,
    right: 10,
  },
  buttonSecret: {
    position: "absolute",
    bottom: 130,
    flexDirection: "column",
    zIndex: 1,
  },
});

export default HeadScreen;
