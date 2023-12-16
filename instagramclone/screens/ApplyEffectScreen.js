import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../assets/colors/Colors";
import {
  Brightness,
  Grayscale,
  Sepia,
  Tint,
  Saturate,
} from "react-native-color-matrix-image-filters";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ApplyEffectScreen = () => {
  const [effect, setEffect] = useState("original");

  const handleEffect = (effect) => {
    setEffect(effect);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Icon size={25} name="arrow-left" />
        <Image
          style={styles.imageIcon}
          source={require("../assets/images/sunshine.png")}
        />
        <Text style={styles.headerTitle}>Next</Text>
      </View>
      <View style={styles.mainImageWrapper}>
        {effect === "original" ? (
          <Image
            style={styles.mainImage}
            source={require("../assets/images/feedImage.jpg")}
          />
        ) : null}

        {effect === "grayscale" ? (
          <Grayscale>
            <Image
              style={styles.mainImage}
              source={require("../assets/images/feedImage.jpg")}
            />
          </Grayscale>
        ) : null}

        {effect === "sepia" ? (
          <Sepia>
            <Image
              style={styles.mainImage}
              source={require("../assets/images/feedImage.jpg")}
            />
          </Sepia>
        ) : null}

        {effect === "tint" ? (
          <Tint>
            <Image
              style={styles.mainImage}
              source={require("../assets/images/feedImage.jpg")}
            />
          </Tint>
        ) : null}

        {effect === "saturate" ? (
          <Saturate>
            <Image
              style={styles.mainImage}
              source={require("../assets/images/feedImage.jpg")}
            />
          </Saturate>
        ) : null}
      </View>
      <View style={styles.effectPreviewWrapper}>
        <ScrollView horizontal={true}>
          <TouchableOpacity
            onPress={() => handleEffect("original")}
            style={styles.previewImageWrapper}
          >
            <Text style={styles.previewTitle}>Original</Text>
            <Brightness>
              <Image
                style={styles.previewImage}
                source={require("../assets/images/feedImage.jpg")}
              />
            </Brightness>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleEffect("grayscale")}
            style={styles.previewImageWrapper}
          >
            <Text style={styles.previewTitle}>Grayscale</Text>
            <Grayscale>
              <Image
                style={styles.previewImage}
                source={require("../assets/images/feedImage.jpg")}
              />
            </Grayscale>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleEffect("sepia")}
            style={styles.previewImageWrapper}
          >
            <Text style={styles.previewTitle}>Sepia</Text>
            <Sepia>
              <Image
                style={styles.previewImage}
                source={require("../assets/images/feedImage.jpg")}
              />
            </Sepia>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleEffect("tint")}
            style={styles.previewImageWrapper}
          >
            <Text style={styles.previewTitle}>Tint</Text>
            <Tint>
              <Image
                style={styles.previewImage}
                source={require("../assets/images/feedImage.jpg")}
              />
            </Tint>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleEffect("saturate")}
            style={styles.previewImageWrapper}
          >
            <Text style={styles.previewTitle}>Saturate</Text>
            <Saturate>
              <Image
                style={styles.previewImage}
                source={require("../assets/images/feedImage.jpg")}
              />
            </Saturate>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.footerWrapper}>
        <View style={styles.pickedFooterSection}>
          <Text style={styles.pickedFooterTitle}>FILTER</Text>
        </View>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>EDIT</Text>
        </View>
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
    flexDirection: "row",
    padding: 10,
  },
  mainImageWrapper: {
    display: "flex",
  },
  effectPreviewWrapper: {
    display: "flex",
    marginTop: "15%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  footerWrapper: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
  imageIcon: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  headerTitle: {
    fontSize: 18,
    color: colors.primary,
  },
  footerSection: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  footerTitle: {
    fontSize: 16,
    color: colors.gray,
  },
  pickedFooterSection: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderBottomColor: colors.black,
    borderBottomWidth: 2,
  },
  pickedFooterTitle: {
    fontSize: 16,
    color: colors.black,
  },
  mainImage: {
    width: width,
    height: height / 2,
  },
  previewImage: {
    width: width / 4,
    height: width / 4,
  },
  previewTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  previewImageWrapper: {
    alignItems: "center",
    marginRight: 10,
  },
});

export default ApplyEffectScreen;
