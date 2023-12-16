import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../assets/colors/Colors";

const PrimaryInputForm = ({ placeholderText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={placeholderText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  inputContainer: {
    backgroundColor: colors.gray1,
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 5,
  },
});

export default PrimaryInputForm;
