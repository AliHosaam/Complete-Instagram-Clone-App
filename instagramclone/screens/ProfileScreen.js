import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../assets/colors/Colors";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeaderWrapper}>
          <Image
            source={require("../assets/images/profilePage/leftArrow.png")}
          />
          <Text style={styles.headerText}>Catherine</Text>
        </View>

        <View>
          <Image
            source={require("../assets/images/profilePage/threedots.png")}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.profileSectionWrapper}>
          <View style={styles.imageSection}>
            <Image
              style={styles.instagramImageBorder}
              source={require("../assets/images/profilePage/storiescircle.png")}
            />
            <Image
              style={styles.userImage}
              source={require("../assets/images/profilePage/face.jpeg")}
            />
            <Text style={styles.userName}>Catherine</Text>
          </View>
          <View style={styles.followersCountsSection}>
            <View style={styles.followingCount}>
              <View>
                <Text style={styles.countTitle}>334</Text>
                <Text style={styles.countSubtitle}>Posts</Text>
              </View>
              <View>
                <Text style={styles.countTitle}>211k</Text>
                <Text style={styles.countSubtitle}>Followers</Text>
              </View>
              <View>
                <Text style={styles.countTitle}>134</Text>
                <Text style={styles.countSubtitle}>Following</Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.messagesButtonWrapper}>
              <Text style={styles.messagesTitle}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonItemWrapper}>
              <Image
                style={styles.buttonIcon}
                source={require("../assets/images/profilePage/profilebuttonplus.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonItemWrapper}>
              <Image
                source={require("../assets/images/profilePage/dropdown.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.moreInfoWrapper}>
          <Text style={styles.introText}>
            Discovering stories around the world
          </Text>
          <Text style={styles.urlText}>www.catherine.com</Text>
        </View>

        <ScrollView style={styles.c} horizontal={true}>
          <View>
            <Image
              style={styles.storiesImage}
              source={require("../assets/images/profilePage/face.jpeg")}
            />
            <Text style={styles.stroyProfileName}>Catherine 1</Text>
          </View>

          <View>
            <Image
              style={styles.storiesImage}
              source={require("../assets/images/profilePage/face.jpeg")}
            />
            <Text style={styles.stroyProfileName}>Catherine 2</Text>
          </View>
          <View>
            <Image
              style={styles.storiesImage}
              source={require("../assets/images/profilePage/face.jpeg")}
            />
            <Text style={styles.stroyProfileName}>Catherine 3</Text>
          </View>
          <View>
            <Image
              style={styles.storiesImage}
              source={require("../assets/images/profilePage/face.jpeg")}
            />
            <Text style={styles.stroyProfileName}>Catherine 4</Text>
          </View>
          <View>
            <Image
              style={styles.storiesImage}
              source={require("../assets/images/profilePage/face.jpeg")}
            />
            <Text style={styles.stroyProfileName}>Catherine 5</Text>
          </View>
          <View>
            <Image
              style={styles.storiesImage}
              source={require("../assets/images/profilePage/face.jpeg")}
            />
            <Text style={styles.stroyProfileName}>Catherine 6</Text>
          </View>
        </ScrollView>

        <View style={styles.viewIconsWrapper}>
          <Image
            source={require("../assets/images/profilePage/gridview.png")}
          />
          <Image
            source={require("../assets/images/profilePage/listView.png")}
          />
          <Image
            source={require("../assets/images/profilePage/profileplus.png")}
          />
        </View>

        <ScrollView>
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
        </ScrollView>
      </ScrollView>
      <View style={styles.footer}>
        <Image
          style={styles.footerIcon}
          source={require("../assets/images/profilePage/home.png")}
        />
        <Image
          style={styles.footerIcon}
          source={require("../assets/images/profilePage/search.png")}
        />
        <Image
          style={styles.footerIcon}
          source={require("../assets/images/profilePage/heart.png")}
        />
        <Image
          style={styles.footerIcon}
          source={require("../assets/images/profilePage/profile.png")}
        />
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
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
    backgroundColor: colors.gray1,
  },
  leftHeaderWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
  },
  profileSectionWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  imageSection: {
    display: "flex",
    flex: 1,
    padding: 5,
  },
  followersCountsSection: {
    display: "flex",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  instagramImageBorder: {
    width: 150,
    height: 150,
  },
  userImage: {
    position: "absolute",
    width: 135,
    height: 135,
    borderRadius: 70,
    margin: 13,
  },
  followingCount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  messagesButtonWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray1,
    width: "50%",
    padding: 4,
  },
  buttonItemWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray1,
    padding: 4,
  },
  buttonIcon: {
    width: 25,
    height: 25,
  },
  messagesTitle: {
    textAlign: "center",
    fontWeight: "700",
  },
  countTitle: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  countSubtitle: {
    color: colors.gray1,
    textAlign: "center",
  },
  userName: {
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
  },
  moreInfoWrapper: {
    marginLeft: 15,
  },
  introText: {
    fontSize: 16,
  },
  urlText: {
    color: colors.blue,
  },
  storiesImage: {
    borderRadius: 70,
    width: 70,
    height: 70,
    borderColor: colors.gray1,
    borderWidth: 3,
    marginRight: 10,
  },
  storiesImage: {
    padding: 15,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  stroyProfileName: {
    textAlign: "center",
  },
  viewIconsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagesWrapper: {
    flexDirection: "row",
  },
  galleryImage: {
    display: "flex",
    flex: 1,
    width: 200,
    height: 100,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerIcon: {
    width: 60,
    height: 60,
  },
});

export default ProfileScreen;
