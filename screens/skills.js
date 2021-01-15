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
  ScrollView,
} from "react-native";

import * as names from "../utils/names";
import AppContext from "../App";

const SkillsScreen = () => {
  const globSettings = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skillsName}>
        <Text style={styles.skillsName}>Your Skills</Text>
      </View>
      <View>
        <Text style={styles.skillsText}>{names.SKILLS}:</Text>
      </View>
      <View style={styles.skillsContainer}>
        <ScrollView>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_ACTING}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_ANTHROPOLOGY}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_ASTRONOMY}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_BIOLOGY}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_CLIMB}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_CTHULHU_MYTHOS}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_DISGUISE}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_FIGHTING}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_FIRST_AID}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_HANDGUN}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_LANGUAGE}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_LOCKSMITH}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_NAVIGATE}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_OCCULT}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_PERSUADE}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_PSYCHOLOGY}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_RIDE}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>{names.NAME_SCIENCE}</Text>
            <TextInput
              style={styles.skillNameInput}
              placeholder="Type points"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   marginHorizontal: 25,
  },
  skillsContainer: {
    flex: 0.9,
    marginTop: 30,
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
  skillNameInput: {},
  skillName: {},
  weaponContainer: {
    marginTop: 30,
    // justifyContent: "center",
  },
  skillRow: {
    marginBottom: 25,
    marginHorizontal: 20,
    justifyContent: "space-around",
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
  skillsName: {
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
  skillsText: {
    marginTop: 35,
    marginLeft: 15,
    fontSize: 20,
  },
});

export default SkillsScreen;
