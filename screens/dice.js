import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

import { useState } from "react";

import { K4, K6, K8, K10, K12, K16, K20, K100 } from "../utils/names";

const Separator = () => <View style={styles.separator} />;

const DiceScreen = () => {
  let [generatedNumber, setGeneratedNumber] = useState(0);
  let [chosenDice, setChosenDice] = useState(0);
  const dicesToSize = {
    0: { val: 4, str: K4 },
    1: { val: 6, str: K6 },
    2: { val: 8, str: K8 },
    3: { val: 10, str: K10 },
    4: { val: 12, str: K12 },
    5: { val: 16, str: K16 },
    6: { val: 20, str: K20 },
    7: { val: 100, str: K100 },
  };

  const increaseDice = () => {
    if (chosenDice < 7) {
      setChosenDice((chosenDice += 1));
    }
  };

  const decreaseDice = () => {
    if (chosenDice > 0) {
      setChosenDice((chosenDice -= 1));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>Dice generator</Text>
        <View>
          <Text style={styles.number}>{generatedNumber}</Text>
        </View>
        <Button
          title="Generate"
          onPress={() =>
            setGeneratedNumber(
              Math.round(Math.random() * dicesToSize[chosenDice].val)
            )
          }
        />
      </View>
      <Separator />
      <View>
        <View style={styles.fixToText}>
          <Button title="Smaller" onPress={decreaseDice} />
          <Text style={styles.dice}>{dicesToSize[chosenDice].str}</Text>
          <Button title="Bigger" onPress={increaseDice} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  mainTitle: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 50,
  },
  title: {
    textAlign: "center",
    marginVertical: 50,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  dice: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 50,
  },
  number: {
    fontSize: 50,
    textAlign: "center",
    marginVertical: 50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default DiceScreen;
