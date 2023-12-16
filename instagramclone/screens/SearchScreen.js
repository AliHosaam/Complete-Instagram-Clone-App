import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../assets/colors/Colors";

const SearchScreen = () => {
  const DATA = [
    { id: "jhgjfhd787", Title: "Rose", subTitle: "Lorem Ipum" },
    { id: "fdgdfgdfgf", Title: "Janaki", subTitle: "Lorem Ipum" },
    { id: "cvbfddffff", Title: "Renuka", subTitle: "Lorem Ipum" },
  ];

  const renderData = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/profilePage/face.")}
        />
        <View style={styles.itemRightWrapper}>
          <Text style={styles.title}>{item.Title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.topHeaderWrapper}>
          <View style={styles.topHeaderLeftWrapper}>
            <Icon size={25} name="back-arrow" />
            <TextInput placeholder="Search" />
          </View>
          <View>
            <Icon size={25} name="times" />
          </View>
        </View>
        <View style={styles.subHeaderWrapper}>
          <TouchableOpacity style={styles.selectedCategoryItem}>
            <Text style={styles.titleSelected}>TOP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.title}>ACCOUNTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.title}>TAGS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.title}>PLACES</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderData}
      />
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
  },
  topHeaderWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  topHeaderLeftWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  subHeaderWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBlockColor: colors.gray1,
    borderBottomWidth: 1,
  },
  selectedCategoryItem: {
    display: "flex",
    flex: 1,
    padding: 5,
    alignItems: "center",
    borderBlockColor: colors.black,
    borderBottomWidth: 1,
  },
  categoryItem: {
    display: "flex",
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    color: colors.gray,
  },
  titleSelected: {
    fontWeight: "700",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  itemRightWrapper: {
    marginLeft: 10,
  },
  title: {
    fontWeight: "700",
  },
  subTitle: {
    color: colors.gray1,
  },
});

export default SearchScreen;
