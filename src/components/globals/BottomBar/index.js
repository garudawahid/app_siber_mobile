import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Dashboard from "../../pages/Home/Dashboard";
import FormEntry from "../../pages/FormRegCleaning/Form";
import ReportList from "../../pages/Report/ReportList";
import CardProfile from "../../pages/Profile/ProfileCard";

import iconHome from "../../../assets/images/iconHome.png";
import iconHomeActive from "../../../assets/images/iconHomeActive.png";
import iconCalender from "../../../assets/images/iconCalender.png";
import iconCalenderActive from "../../../assets/images/iconCalenderActive.png";
import iconReport from "../../../assets/images/iconReport.png";
import iconReportActive from "../../../assets/images/iconReportActive.png";
import iconProfile from "../../../assets/images/iconProfile.png";
import iconProfileActive from "../../../assets/images/iconProfileActive.png";

const Tab = createBottomTabNavigator();

const BottomBar = ({ navigation, routeTitleActive, setRouteTitleActive }) => {
  return (
    <Tab.Navigator initialRouteName="BottomTabs">
      <Tab.Screen
        name="BarHome"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              source={routeTitleActive == "Home" ? iconHomeActive : iconHome}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            setRouteTitleActive("Home");
          },
        }}
      />
      <Tab.Screen
        name="BarRegister"
        component={FormEntry}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              source={
                routeTitleActive == "Form Register"
                  ? iconCalenderActive
                  : iconCalender
              }
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            setRouteTitleActive("Form Register");
          },
        }}
      />
      <Tab.Screen
        name="BarReport"
        component={ReportList}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              source={
                routeTitleActive == "Report" ? iconReportActive : iconReport
              }
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            setRouteTitleActive("Report");
          },
        }}
      />

      <Tab.Screen
        name="BarProfile"
        component={CardProfile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              source={
                routeTitleActive == "Profile" ? iconProfileActive : iconProfile
              }
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            setRouteTitleActive("Profile");
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
