import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import SearchBox from "../components/SearchBox";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../assets/colors/Colors";
import Tags from "../components/Tags";

const SearchHomeScreen = () => {
  const tags = [
    { icon: "shopping-basket", tagName: "Shop" },
    { icon: "heart", tagName: "Well-beight" },
    { icon: "", tagName: "Travel" },
  ];

  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <SearchBox />
          <Icon style={styles.qrCode} name="qrcode" size={30} />
        </View>
        <ScrollView horizontal={true} style={styles.tagWrapper}>
          <Tags tags={tags} />
        </ScrollView>
      </View>

      <ScrollView>
        <View style={styles.videoContainer}></View>
        <View>
          <View style={styles.imagesWrapper}>
            <Image
              style={styles.galleryImage}
              source={require("../assets/images/profilePage/1.jpg")}
            />
            <Image
              style={styles.galleryImage}
              source={require("../assets/images/profilePage/2.jpg")}
            />
            <Image
              style={styles.galleryImage}
              source={require("../assets/images/profilePage/4.jpg")}
            />
          </View>
          <View style={styles.imagesWrapper}>
            <Image
              style={styles.galleryImage}
              source={require("../assets/images/profilePage/1.jpg")}
            />
            <Image
              style={styles.galleryImage}
              source={require("../assets/images/profilePage/2.jpg")}
            />
            <Image
              style={styles.galleryImage}
              source={require("../assets/images/profilePage/4.jpg")}
            />
          </View>
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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  qrCode: {
    padding: 10,
  },
  headerWrapper: {
    backgroundColor: colors.gray1,
  },
  tagWrapper: {
    padding: 10,
  },
  videoContainer: {
    backgroundColor: colors.black,
    height: width,
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
  imagesWrapper: {
    flexDirection: "row",
  },
  galleryImage: {
    display: "flex",
    flex: 1,
    height: 150,
    margin: 1,
  },
});

export default SearchHomeScreen;
