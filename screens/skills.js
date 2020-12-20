import React from "react";
import { useContext, useState } from "react";
import {
  TextInput,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

import { SKILLS } from "../utils/names";

const SkillsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{SKILLS}</Text>
    </View>
  );
};

export default SkillsScreen;
