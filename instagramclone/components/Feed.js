import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../assets/colors/Colors";

const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.profileThumb}
            source={require("../assets/images/face.jpeg")}
          />
          <Text style={styles.headerTitle}>Catherine</Text>
        </View>

        <Image
          style={styles.icon}
          source={require("../assets/images/dots.jpg")}
        />
      </View>

      <View>
        <Image
          style={styles.feedImage}
          source={require("../assets/images/feedImage.jpg")}
        />
      </View>

      <View style={styles.feedImageFooter}>
        <View style={styles.feedImageFooterLeftWrapper}>
          <Image
            style={styles.icon}
            source={require("../assets/images/heartfeed.jpg")}
          />

          <Image
            style={styles.icon}
            source={require("../assets/images/messagefeed.png")}
          />

          <Image
            style={styles.icon}
            source={require("../assets/images/comment.png")}
          />
        </View>

        <Image
          style={styles.icon}
          source={require("../assets/images/bookmarkfeed.png")}
        />
      </View>

      <View style={styles.underlineWrapper}>
        <View style={styles.underline} />
      </View>

      <View style={styles.likesAndCommentsWrapper}>
        <Image
          style={styles.likesImage}
          source={require("../assets/images/heart.png")}
        />
        <Text style={styles.likesTitle}>1,124 Likes</Text>
      </View>
      <Text>
        {" "}
        <Text style={styles.headerTitle}>Catherine</Text>{" "}
        <Text style={styles.likesTitle}>Missing Summary</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  profileThumb: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    opacity: 0.5,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  feedImage: {
    width: "100%",
  },
  feedImageFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  feedImageFooterLeftWrapper: {
    flexDirection: "row",
  },
  underline: {
    height: 1,
    backgroundColor: colors.gray1,
    padding: 10,
  },
  underlineWrapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  likesImage: {
    width: 25,
    height: 25,
  },
  likesAndCommentsWrapper: {
    flexDirection: "row",
    padding: 15,
  },
  likesTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
});

export default Feed;
