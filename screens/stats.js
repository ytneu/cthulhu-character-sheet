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

import { STATS } from "../utils/names";

const StatsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{STATS}</Text>
    </View>
  );
};

export default StatsScreen;
