import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
// import { RootStackParamList } from "./../persons/Flesh";

const FleshInfo: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>FleshInfo Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems:'center',
  },
});
export default FleshInfo;
