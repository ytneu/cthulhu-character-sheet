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

import { EQ } from "../utils/names";

const EQScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{EQ}</Text>
    </View>
  );
};

export default EQScreen;
