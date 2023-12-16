import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../assets/colors/Colors";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("InitialLunchScreen");
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/images/icon.png")}
        />
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.text}>From</Text>
        <Image
          style={styles.logo}
          source={require("../assets/images/facebookTextLogo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 150,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    gap: 12,
    justifyContent: "flex-end",
    marginTop: 150,
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 350,
  },
  logo: {
    width: 150,
    height: 20,
    marginBottom: 30,
  },
  text: {
    color: colors.gray,
  },
});

export default SplashScreen;
