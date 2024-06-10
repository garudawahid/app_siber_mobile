import { useState } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen, AuthLogin } from "../components/pages";

import Home from "../components/pages/Home";
import Report from "../components/pages/Report";
import Profile from "../components/pages/Profile";

const style = StyleSheet.create({
  header: {
    backgroundColor: "#004A99",
  },
});

const styleHeader = {
  headerStyle: style.header,
  headerTintColor: "#FFFFFF",
  headerTitleAlign: "center",
};

const Stack = createNativeStackNavigator();

const Router = () => {
  const [routeTitleActive, setRouteTitleActive] = useState("Home");

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
        name="Dashboard"
        children={() => (
          <Home
            routeTitleActive={routeTitleActive}
            setRouteTitleActive={setRouteTitleActive}
          />
        )}
        options={{
          ...styleHeader,
          title: routeTitleActive,
        }}
      />

      <Stack.Screen
        name="Report"
        children={() => (
          <Report
            routeTitleActive={routeTitleActive}
            setRouteTitleActive={setRouteTitleActive}
          />
        )}
        options={{
          ...styleHeader,
          title: routeTitleActive,
        }}
      />

      <Stack.Screen
        name="Profile"
        children={() => (
          <Profile
            routeTitleActive={routeTitleActive}
            setRouteTitleActive={setRouteTitleActive}
          />
        )}
        options={{
          ...styleHeader,
          title: routeTitleActive,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
