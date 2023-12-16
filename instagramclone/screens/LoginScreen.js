import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PrimaryInputForm from "../components/PrimaryInputForm";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../assets/colors/Colors";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionTop}>
        <View style={styles.languageContainer}>
          <TouchableOpacity>
            <Text>
              <Text>English (United States) </Text> <Icon name="caret-down" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionMiddle}>
        <View>
          <Image
            resizeMode="contain"
            style={styles.instagramLogo}
            source={require("../assets/images/profilePage/leftArrow.png")}
          />
        </View>

        <View style={styles.inputItem}>
          <PrimaryInputForm placeholderText="Phone number .Email or Password" />
        </View>

        <View style={styles.inputItem}>
          <PrimaryInputForm placeholderText="Password" />
        </View>

        <View style={styles.inputItem}>
          <PrimaryButton
            buttonColor={colors.primary}
            textColor={colors.secondary}
            buttonLabel="Next"
            onPressButton={() => navigation.navigate("TabNav")}
          />
        </View>

        <View style={styles.inputItem}>
          <Text style={styles.subTitle}>
            <Text style={styles.forgetPasswordText}>
              Forgot your login details?
            </Text>
            <Text style={styles.link}>Get help in Sign in?</Text>
          </Text>
          <Text style={styles.subTitleOR}>OR</Text>
        </View>

        <View style={styles.inputItem}>
          <PrimaryButton
            buttonColor={colors.secondary}
            textColor={colors.primary}
            buttonLabel="Login with Facebook"
          />
        </View>
      </View>

      <View style={styles.sectionBottom}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen1")}>
          <Text style={styles.subTitle}>
            <Text style={styles.noAccount}>Don't have an account?</Text>{" "}
            <Text style={styles.link}>Signup.</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  sectionBottom: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    padding: 15,
  },
  sectionTop: {
    flex: 1,
    display: "flex",
  },
  sectionMiddle: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  languageContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  instagramLogo: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
  },
  inputItem: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  subTitle: {
    textAlign: "center",
  },
  forgetPasswordText: {
    color: colors.gray,
  },
  link: {
    color: colors.primary,
  },
  subTitleOR: {
    margin: 15,
    textAlign: "center",
  },
  noAccount: {
    color: colors.gray,
  },
});

export default LoginScreen;
