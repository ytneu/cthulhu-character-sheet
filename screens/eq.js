import React from "react";
import { useContext, useState } from "react";
import Constants from "expo-constants";
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
import { ScrollView } from "react-native-gesture-handler";

const EQScreen = () => {
  // const [weaponName1, setWeaponName1] = useState('')
  // const [weaponName2, setWeaponName2] = useState('')
  // const [weaponName3, setWeaponName3] = useState('')

  // const [weaponDmg1, setWeaponDmg1] = useState('')
  // const [weaponDmg2, setWeaponDmg2] = useState('')
  // const [weaponDmg3, setWeaponDmg3] = useState('')

  // const [inventory, setInventory] = useState('')

  // const [cr, setCr] = useState('')
  // const [cash, setCash] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.eqName}>
        <Text style={styles.eqName}>Your Equpiment</Text>
      </View>
      <View styles={styles.eqContainer}>
        <ScrollView>
          <View>
            <Text style={styles.weaponText}>{names.WEAPON}:</Text>
          </View>
          <View style={styles.weaponContainer}>
            <View style={styles.weaponRow}>
              <Text style={styles.weaponName}>Weapon Name: </Text>
              <TextInput style={styles.weaponNameInput} placeholder="Weapon name" />
              <TextInput
                style={styles.weaponDamageInput}
                placeholder="Weapon dmg"
              />
            </View>
            <View style={styles.weaponRow}>
              <Text style={styles.weaponName}>Weapon Name: </Text>
              <TextInput style={styles.weaponNameInput} placeholder="Weapon name" />
              <TextInput
                style={styles.weaponDamageInput}
                placeholder="Weapon dmg"
              />
            </View>
            <View style={styles.weaponRow}>
              <Text style={styles.weaponName}>Weapon Name: </Text>
              <TextInput style={styles.weaponNameInput} placeholder="Weapon name" />
              <TextInput
                style={styles.weaponDamageInput}
                placeholder="Weapon dmg"
              />
            </View>
          </View>
          <View style={styles.inventoryContainer}>
            <Text style={styles.inventoryText}>{names.INVENTORY}:</Text>
            <TextInput
              style={styles.creditRatingInput}
              multiline={true}
              placeholder="Your Inventory"
            />
          </View>
          <View style={styles.creditRatingRow}>
            <Text style={styles.creditRatingText}>{names.NAME_CREDIT_RATING}:</Text>
            <TextInput
              style={styles.creditRatingInput}
              placeholder="Your CR points"
            />
          </View>
          <View style={styles.creditRatingRow}>
            <Text style={styles.creditRatingText}>{names.CASH}:</Text>
            <TextInput
              style={styles.creditRatingInput}
              placeholder="Your Credits"
              defaultValue="0"
            />
            <Text style={styles.creditRatingText}> $</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    //   marginHorizontal: 25,
  },
  inventoryText: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 20,
  },
  inventoryContainer: {},
  eqContainer: {
    flex: 0.9,
    paddingTop: Constants.statusBarHeight,
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
  weaponName: { flex: 1 },
  weaponContainer: {
    marginTop: 30,
    // justifyContent: "center",
  },
  weaponRow: {
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
  eqName: {
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

export default EQScreen;
