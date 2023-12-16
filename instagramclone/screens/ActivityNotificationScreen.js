import React from "react";
import {
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../assets/colors/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

const ActivityNotificationScreen = () => {
  //notificationType:'0' - Users shared Photos
  //notificationType:'1' - Follow user
  //notificationType:'2' - users actions

  const DATA = [
    {
      id: 1,
      title: "Today",
      data: [
        {
          notificationType: "0",
          notificationDuration: "5 h",
          mentionedUsers: ["Roy", "Jackson", "Manjula"],
          notificationImage: require("../assets/images/face.jpeg"),
          noOfPhotos: 5,
        },
      ],
    },
    {
      id: 2,
      title: "This Week",
      data: [
        {
          notificationType: "1",
          notificationDuration: "2 d",
          mentionedUsers: ["Roy", "Jackson", "Manjula"],
          notificationImage: require("../assets/images/face.jpeg"),
        },
      ],
    },
    {
      id: 3,
      title: "This Month",
      data: [
        {
          notificationType: "1",
          notificationDuration: "1 w",
          mentionedUsers: ["Roy", "Jackson"],
          notificationImage: require("../assets/images/face.jpeg"),
        },
      ],
    },
    {
      id: 4,
      title: "This Month",
      data: [
        {
          notificationType: "2",
          notificationDuration: "1 w",
          mentionedUsers: ["Roy", "Jackson", "Janaki"],
          notificationImage: require("../assets/images/face.jpeg"),
        },
      ],
    },
  ];

  const renderData = ({ item }) => {
    if (item.notificationType === "0") {
      return (
        <View style={styles.sectionItemsWrapper}>
          <Image
            style={styles.notificationImage}
            source={item.notificationImage}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text style={styles.userNames}>
              {item.mentionedUsers.join(",")}
            </Text>
            <Text>and others shared</Text>
            <Text>{item.noOfPhotos + "Photos."}</Text>
            <Text style={styles.duration}>{item.notificationDuration}</Text>
          </Text>
        </View>
      );
    } else if (item.notificationType === "1") {
      return (
        <View style={styles.sectionItemsWrapper}>
          <Image
            style={styles.notificationImage}
            source={item.notificationImage}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text>Follow</Text>
            <Text style={styles.userNames}>
              {item.mentionedUsers.join(",")}
            </Text>
            <Text>and others you know to see their photos and videos.</Text>
            <Text>{item.noOfPhotos + "Photos."}</Text>
            <Text>{item.notificationDuration}</Text>
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.sectionItemsWrapper}>
          <Image
            style={styles.notificationImage}
            source={item.notificationImage}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text style={styles.userNames}>{item.mentionedUsers[0]}</Text>
            <Text>and</Text>
            <Text style={styles.userNames}>{item.mentionedUsers[1]}</Text>
            <Text>follows</Text>
            <Text style={styles.userNames}>{item.mentionedUsers[2]}</Text>
            <Text>on instagram see their posts.</Text>
            <Text>{item.notificationDuration}</Text>
          </Text>

          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Activity</Text>
      </View>

      <View style={styles.promotionWrapper}>
        <Icon size={30} name={"arrow-circle-up"} />
        <View style={styles.promotionsContentWrapper}>
          <Text style={styles.promotionsTitle}>Promotions</Text>
          <Text>Recent activity from your promotions</Text>
        </View>
      </View>

      <View style={styles.sectionListWrapper}>
        <SectionList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderData}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>

      <View style={styles.footer}>
        <Icon color={colors.black} size={25} name="home" />
        <Icon color={colors.gray} size={25} name="search" />
        <Icon color={colors.gray} size={25} name="plus-square" />
        <Icon color={colors.gray} size={25} name="heart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  headerWrapper: {
    display: "flex",
    borderBlockColor: colors.gray1,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    padding: 15,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    justifyContent: "space-between",
    padding: 10,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionListWrapper: {
    display: "flex",
    flex: 1,
    padding: 15,
  },
  promotionWrapper: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    borderBlockColor: colors.gray1,
    borderBottomWidth: 1,
  },
  promotionsContentWrapper: {
    marginLeft: 10,
  },
  promotionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionItemsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  notificationImage: {
    height: 50,
    width: 50,
    borderRadius: 70,
  },
  notificationContentWrapper: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    padding: 15,
  },
  userNames: {
    fontWeight: "bold",
  },
  duration: {
    color: colors.gray,
  },
  followButton: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 5,
  },
  followButtonText: {
    padding: 5,
    color: colors.secondary,
  },
});

export default ActivityNotificationScreen;
