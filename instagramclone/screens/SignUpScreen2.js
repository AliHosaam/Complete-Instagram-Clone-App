import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryInputForm from "../components/PrimaryInputForm";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../assets/colors/Colors";

const SignUpScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>ENTER CONFIRMATION CODE</Text>
      </View>
      <View style={styles.subHeadingContainer}>
        <Text style={styles.infoText}>
          Enter the 6 digits code we sent to +91 8886502009 .{" "}
          <Text style={styles.requestText}>Request a new one</Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <PrimaryInputForm placeholderText="Confirmation Code" />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          buttonColor={colors.primary}
          textColor={colors.secondary}
          buttonLabel="Next"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.login}>
          <Text style={styles.alreadyAccount}>Already have an account?</Text>{" "}
          <Text style={styles.logIn}>LogIn</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  headingContainer: {
    marginTop: "20%",
    marginBottom: 20,
  },
  subHeadingContainer: {
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: 15,
  },
  inputContainer: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  buttonContainer: {
    marginLeft: "5%",
    marginRight: "5%",
  },
  heading: {
    textAlign: "center",
    fontWeight: "700",
  },
  infoText: {
    color: colors.gray,
  },
  requestText: {
    color: colors.primary,
    fontWeight: "700",
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    padding: 15,
  },
  login: {
    textAlign: "center",
  },
  alreadyAccount: {
    color: colors.gray,
  },
  logIn: {
    fontWeight: "700",
  },
});

export default SignUpScreen2;
