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

import * as names from "../utils/names";
import AppContext from "../App";

const StatsScreen = () => {
  const globSettings = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statsName}>
        <Text style={styles.statsName}>Your Stats</Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          <Text style={styles.itemName}>{names.NAME_SANITY}: </Text>
          <TextInput style={styles.weaponNameInput} placeholder="sanity points amount" />
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.itemName}>{names.NAME_HP}: </Text>
          <TextInput style={styles.weaponNameInput} placeholder="hit points amount" />
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.itemName}>{names.NAME_MAGIC_POINTS}: </Text>
          <TextInput style={styles.weaponNameInput} placeholder="magic points amount" />
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.itemName}>{names.NAME_LUCK}: </Text>
          <TextInput style={styles.weaponNameInput} placeholder="luck points amount" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   marginHorizontal: 25,
  },
  itemName: {
    marginRight: 5,
  },
  creditRatingRow: {
    marginVertical: 20,
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  creditRatingInput: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 20,
  },
  creditRatingText: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 20,
  },
  weaponDamageInput: { flex: 1.5 },
  weaponNameInput: { flex: 2.5 },
  statsName: { flex: 1 },
  statsContainer: {
    marginTop: 30,
    // justifyContent: "center",
  },
  statsRow: {
    marginBottom: 25,
    marginHorizontal: 20,
    // justifyContent: "space-around",
    flexDirection: "row",
  },
  twoItemsRow: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  charInput: {
    fontSize: 18,
  },
  charName: {
    fontSize: 18,
    paddingRight: 8,
  },
  charsContainer: {
    marginTop: 40,
    marginHorizontal: 35,
  },
  rowContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 25,
  },
  statsName: {
    marginTop: 15,
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
  },
  profession: {
    marginTop: 20,
    fontSize: 23,
    justifyContent: "center",
  },
  weaponText: {
    marginTop: 35,
    marginLeft: 15,
    fontSize: 20,
  },
});

export default StatsScreen;
