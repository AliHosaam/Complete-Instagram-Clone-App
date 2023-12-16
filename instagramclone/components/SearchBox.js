import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../assets/colors/Colors";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");

  const textChange = (text) => {
    setSearchText(text);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Icon
            style={styles.icon}
            name="search"
            size={22}
            color={colors.gray}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            onChangeText={(text) => textChange(text)}
            placeholder="Search"
            style={styles.inputBox}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  iconWrapper: {
    display: "flex",
    flex: 1,
  },
  inputWrapper: {
    display: "flex",
    flex: 1,
  },
  inputBox: {
    height: 40,
  },
  icon: {
    padding: 5,
  },
});

export default SearchBox;
