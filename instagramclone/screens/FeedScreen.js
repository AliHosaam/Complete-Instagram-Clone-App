import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { colors } from "../assets/colors/Colors";
import Feed from "../components/Feed";
import Stories from "../components/Stories";

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={require("../assets/images/camera.jpg")}
        />

        <Image
          style={styles.logo}
          source={require("../assets/images/instagramLogo.png")}
        />
        <View style={styles.rightWrapper}>
          <Image
            style={styles.icon}
            source={require("../assets/images/igtv.png")}
          />

          <Image
            style={styles.icon}
            source={require("../assets/images/message.jpg")}
          />
        </View>
      </View>

      <View style={styles.storiesWrapper}>
        <Stories />
      </View>

      <ScrollView style={styles.feedContainer}>
        <Feed />
      </ScrollView>

      <View style={styles.footer}>
        <Icon color={colors.black} name="home" size={25} />
        <Icon color={colors.gray} name="search" size={25} />
        <Icon color={colors.gray} name="plus-square" size={25} />
        <Icon color={colors.gray} name="heart" size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  footer: {
    bottom: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
  },
  feedContainer: {
    display: "flex",
  },
  icon: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 150,
    height: "100%",
  },
  rightWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  storiesWrapper: {
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
});

export default FeedScreen;
