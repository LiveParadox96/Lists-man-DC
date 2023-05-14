import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeadScreen from "./components/HeadScreen/HeadScreen";
import FleshInfo from "./components/Detailinfopersons/FleshInfo";
import WanderWumenInfo from "./components/Detailinfopersons/WanderWumenInfo";
import GreenLantern from "./components/persons/GreenLantern";
import GreenLanternInfo from "./components/Detailinfopersons/GreenLanternInfo";

// Определение типов для навигации
type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HeadScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Flesh" component={FleshInfo} />
        <Stack.Screen name="Wonder Woman" component={WanderWumenInfo} />
        <Stack.Screen name="Green Lantern" component={GreenLanternInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
