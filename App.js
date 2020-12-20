import * as React from "react";
import { Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";

import * as names from "./utils/names";

import DiceScreen from "./screens/dice";
import ProfileScreen from "./screens/profile";
import EQScreen from "./screens/eq";
import SkillsScreen from "./screens/skills";
import StatsScreen from "./screens/stats";

export const AppContext = React.createContext();

const Tab = createBottomTabNavigator();

export default function App() {
  const [strength, setStrength] = React.useState(10);
  const [constitution, setConstitution] = React.useState(5);
  const [power, setPower] = React.useState(3);
  const [dexterity, setDexterity] = React.useState(0);
  const [appearance, setAppearance] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [intelligence, setIntelligence] = React.useState(0);
  const [education, setEducation] = React.useState(0);

  const globSettings = {
    str: strength,
    con: constitution,
    pow: power,
    dex: dexterity,
    app: appearance,
    siz: size,
    int: intelligence,
    edu: education,
  };

  return (
    <AppContext.Provider value={globSettings}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === names.PROFILE) {
                iconName = focused ? "ios-person" : "ios-person-outline";
              } else if (route.name === names.STATS) {
                iconName = focused ? "analytics" : "analytics-outline";
              } else if (route.name === names.EQ) {
                iconName = focused ? "wallet" : "wallet-outline";
              } else if (route.name === names.SKILLS) {
                iconName = focused ? "bonfire" : "bonfire-outline";
              } else if (route.name === names.DICES) {
                iconName = focused ? "dice-d20" : "dice-d6";
                return <Icon name={iconName} size={size} color={color} />;
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name={names.STATS} component={StatsScreen} />
          <Tab.Screen name={names.SKILLS} component={SkillsScreen} />
          <Tab.Screen name={names.EQ} component={EQScreen} />
          <Tab.Screen name={names.PROFILE} component={ProfileScreen} />
          <Tab.Screen name={names.DICES} component={DiceScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
