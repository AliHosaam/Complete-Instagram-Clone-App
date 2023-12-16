import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../assets/colors/Colors";
import PrimaryButton from "../components/PrimaryButton";
import SearchBox from "../components/SearchBox";

const InitialLunchScreen = ({ navigation }) => {
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const handleClick = () => {
    setLanguageModalVisible((prev) => !prev);
  };

  const DATA = [
    { id: "1", title: "Language 1", subTitle: "Language 1" },
    { id: "2", title: "Language 2", subTitle: "Language 2" },
    { id: "3", title: "Language 3", subTitle: "Language 3" },
    { id: "4", title: "Language 4", subTitle: "Language 4" },
    { id: "5", title: "Language 5", subTitle: "Language 5" },
    { id: "6", title: "Language 6", subTitle: "Language 6" },
    { id: "7", title: "Language 7", subTitle: "Language 7" },
  ];

  const renderData = ({ item }) => {
    return (
      <View style={styles.languagesWrapper}>
        <Text style={styles.langTitle}>{item.title}</Text>
        <Text style={styles.subLanguage}>{item.subTitle}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.languageWrapper}>
        <TouchableOpacity onPress={handleClick()}>
          <Text style={styles.language}>English (United States)</Text>
          <Icon name="angle-down" size={25} color={colors.gray1} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <Image
          style={styles.instagramLogo}
          source={require("../assets/images/instagramLogo.png")}
        />
        <PrimaryButton
          buttonLabel="Create New Account"
          buttonColor={colors.primary}
          textColor={colors.secondary}
          onPressButton={() => navigation.navigate("LoginScreen")}
        />
        <PrimaryButton
          buttonLabel="Login"
          buttonColor={colors.secondary}
          textColor={colors.primary}
          onPressButton={() => navigation.navigate("SignUpScreen1")}
        />
      </View>
      <View style={styles.footerWrapper}>
        <View style={styles.footerContainerWrapper}>
          <Text style={styles.text}>from</Text>
          <Text style={styles.facebook}>FACEBOOK</Text>
        </View>
      </View>

      <Modal transparent={true} visible={languageModalVisible}>
        <View
          style={[
            styles.modalContainer,
            {
              backgroundColor: languageModalVisible
                ? "rgba(0, 0, 0, 0.5)"
                : null,
            },
          ]}
        >
          <View style={styles.modelContentContainer}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>SELECT YOUR LANGUAGE</Text>
            </View>
            <View style={styles.underline}>
              <View style={styles.searchBoxWrapper}>
                <SearchBox />
              </View>
            </View>

            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={renderData}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  languageWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  language: {
    color: colors.gray1,
  },
  footerWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  instagramLogo: {
    width: "50%",
    height: "25%",
  },
  footerContainerWrapper: {
    borderTopColor: colors.gray1,
    borderTopWidth: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    color: colors.gray1,
  },
  facebook: {
    fontWeight: "bold",
  },
  modalContainer: {
    display: "flex",
    flex: 1,
  },
  modelContentContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.secondary,
    marginLeft: "10%",
    marginRight: "10%",
  },
  titleWrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  underline: {
    height: 0.5,
    backgroundColor: colors.gray1,
  },
  languagesWrapper: {
    marginLeft: 15,
    marginBottom: 10,
  },
  subLanguage: {
    color: colors.gray1,
    fontSize: 16,
  },
  langTitle: {
    fontSize: 20,
  },
});

export default InitialLunchScreen;
