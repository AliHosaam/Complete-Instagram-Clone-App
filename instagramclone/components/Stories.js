import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Stories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.storiesHeaderWrapper}>
        <Text style={styles.storiesHeaderText}>Stories</Text>
        <Text style={styles.storiesHeaderText}>Watch All</Text>
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.myStroyImageWrapper}>
          <Image
            style={styles.myStoryImage}
            source={require("../assets/images/face.jpeg")}
          />
          <Text style={styles.profileName}>Catherine</Text>
        </View>
        <View style={styles.otherStoryImageWrapper}>
          <Image
            style={styles.storyRound}
            source={require("../assets/images/storiescircle.png")}
          />
          <Text style={styles.profileName}>Seona</Text>
          <Image
            style={styles.otherStories}
            source={require("../assets/images/storiescircle.png")}
          />
        </View>
        <View style={styles.otherStoryImageWrapper}>
          <Image
            style={styles.storyRound}
            source={require("../assets/images/storieslivecircle.png")}
          />
          <Text style={styles.profileName}>Margeret</Text>
          <Image
            style={styles.otherStories}
            source={require("../assets/images/storiescircle.png")}
          />
        </View>
        <View style={styles.otherStoryImageWrapper}>
          <Image
            style={styles.storyRound}
            source={require("../assets/images/storieslivecircle.png")}
          />

          <Image
            style={styles.otherStories}
            source={require("../assets/images/storiescircle.png")}
          />
          <Text style={styles.profileName}>Sonia</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  storiesHeaderWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  storiesHeaderText: {
    fontSize: 17,
    fontWeight: "700",
  },
  myStoryImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  myStroyImageWrapper: {
    padding: 10,
  },
  otherStories: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 12,
  },
  storyRound: {
    width: 85,
    height: 85,
  },
  otherStoryImageWrapper: {},
});

export default Stories;
