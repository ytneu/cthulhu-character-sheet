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

const ProfileScreen = () => {
  const [userName, setUserName] = useState("");
  const [profession, setProffesion] = useState("");
  const globSettings = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userName}>
        <TextInput
          textAlign="center"
          style={styles.userName}
          placeholder="Type your name!"
          onChangeText={(userName) => setUserName(userName)}
          defaultValue={userName}
        />
      </View>
      <View style={styles.profession}>
        <TextInput
          textAlign="center"
          style={styles.profession}
          placeholder="Type your profession!"
          onChangeText={(profession) => setProffesion(profession)}
          defaultValue={profession}
        />
      </View>
      <View>
        <Text style={styles.charsText}>{names.CHARACTERISTICS}:</Text>
      </View>
      <View>
        <Text style={styles.charsText}>Glob settings: {globSettings}</Text>
      </View>
      <View style={styles.charsContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.charName}>{names.SH_STRENGTH}: </Text>
          <TextInput
            style={styles.charInput}
            placeholder="Value"
            defaultValue={"5"}
          />
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
  charInput: {},
  charName: {
    fontSize: 15,
  },
  charsContainer: {
    marginTop: 40,
    marginHorizontal: 35,
  },
  rowContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  userName: {
    marginTop: 15,
    fontSize: 30,
    justifyContent: "center",
  },
  profession: {
    marginTop: 20,
    fontSize: 23,
    justifyContent: "center",
  },
  charsText: {
    marginTop: 35,
    marginLeft: 15,
    fontSize: 20,
  },
});

export default ProfileScreen;
