import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen, AuthLogin, Home } from "../components/pages";

const style = StyleSheet.create({
  header: {
    backgroundColor: "#004A99",
    height: 100,
  },
});

const styleHeader = {
  headerStyle: style.header,
  headerTintColor: "#FFFFFF",
  headerTitleAlign: "center",
};

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SplashScreen"
        component={SplashScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="AuthLogin"
        component={AuthLogin}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          ...styleHeader,
          title: "Home",
          
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
