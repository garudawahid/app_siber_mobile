import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../components/pages";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SplashScreen"
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
};

export default Router;
