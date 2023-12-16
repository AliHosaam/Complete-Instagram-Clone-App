import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../assets/colors/Colors";

const PhoneInputForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.countryWrapper}>
        <Text style={styles.country}>IN +91</Text>
      </View>
      <View style={styles.inputNumber}>
        <TextInput value="8086502009" />
      </View>
      <View style={styles.closeBtnWrapper}>
        <Icon size={20} style={styles.icon} name="times" color={colors.gray1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.gray,
    backgroundColor: colors.gray1,
  },
  countryWrapper: {
    display: "flex",
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: colors.gray,
    paddingRight: 15,
  },
  inputNumber: {
    display: "flex",
    flex: 1,
    paddingLeft: 15,
  },
  closeBtnWrapper: {
    display: "flex",
    flex: 1,
  },
  icon: {
    textAlign: "right",
  },
  country: {
    fontWeight: "700",
    color: colors.gray,
  },
});

export default PhoneInputForm;
