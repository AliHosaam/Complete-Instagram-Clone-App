import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../assets/colors/Colors";
import PhoneInputForm from "../components/PhoneInputForm";
import PrimaryButton from "../components/PrimaryButton";

const SignUpScreen1 = ({ navigation }) => {
  const [isPhoneEnabled, setIsPhoneEnabled] = useState(false);

  const switchButton = (val) => {
    setIsPhoneEnabled(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={require("../assets/images/avatar.jpg")}
          />
        </View>

        <View style={styles.switchTitleWrapper}>
          <TouchableOpacity
            style={[
              styles.switchTitle,
              {
                borderBottomColor: isPhoneEnabled ? colors.black : colors.gray,
              },
            ]}
            onPress={switchButton(true)}
          >
            <Text
              style={[
                styles.title,
                { color: isPhoneEnabled ? colors.gray : colors.black },
              ]}
            >
              PHONE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.switchTitle,
              {
                borderBottomColor: isPhoneEnabled ? colors.black : colors.gray,
              },
            ]}
            onPress={switchButton(false)}
          >
            <Text
              style={[
                styles.title,
                { color: isPhoneEnabled ? colors.gray : colors.black },
              ]}
            >
              EMAIL
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.phoneNumberInputWrapper}>
          <PhoneInputForm />
        </View>

        <View style={styles.notificationWrapper}>
          <Text style={styles.notificationText}>
            You may receive SMS updated from instagram and can opt out at any
            time.
          </Text>
        </View>

        <View style={styles.buttonWrapper}>
          <PrimaryButton
            buttonLabel="Next"
            textColor={colors.secondary}
            buttonColor={colors.primary}
            onPressButton={() => navigation.navigate("SignUpScreen2")}
          />
        </View>
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
  avatar: {
    height: 200,
    width: 200,
  },
  avatarWrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: "20%",
  },
  switchTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    margin: 30,
  },
  switchTitle: {
    display: "flex",
    flex: 1,
    borderBottomWidth: 1,
  },
  title: {
    textAlign: "center",
    padding: 15,
    fontWeight: "700",
  },
  phoneNumberInputWrapper: {
    display: "flex",
    margin: 30,
  },
  notificationWrapper: {
    padding: 30,
    paddingTop: 10,
  },
  notificationText: {
    textAlign: "center",
    color: colors.gray,
  },
  buttonWrapper: {
    marginLeft: 15,
    marginRight: 15,
  },
  topContainer: {
    display: "flex",
    flex: 1,
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

export default SignUpScreen1;
