import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../assets/colors/Colors";
import Icon from "react-native-vector-icons/FontAwesome";

const Tags = ({ tags }) => {
  return tags.map((item) => {
    return (
      <View style={styles.container}>
        <Text style={styles.tagTextWrapper}>
          {item.icon !== "" ? <Icon name={item.icon} /> : null}
          <Text style={styles.tag}>{item.tagName}</Text>
        </Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    borderWidth: 1,
    borderColor: colors.gray,
    margin: 5,
    borderRadius: 5,
  },
  tag: {
    padding: 5,
    fontWeight: "700",
  },
  tagTextWrapper: {
    padding: 5,
  },
});

export default Tags;
