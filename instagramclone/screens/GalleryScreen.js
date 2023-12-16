import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../config/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import CameraRoll from "@react-native-community/cameraroll";
import { Picker } from "@react-native-community/picker";

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === "granted";
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const GalleryScreen = () => {
  const [albums, setAlbums] = useState([]);
  const [pickedImages, setPickedImages] = useState([]);
  const [category, setCategory] = useState([]);
  const [images, setImages] = useState([]);

  async function componentDidMount() {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      return;
    }

    let params = { assetType: "All" };
    CameraRoll.getAlbums(params)
      .then((albums) => {
        setAlbums(albums);
        console.log(albums);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  imagePressed = (item, key) => {
    setPickedImages(item.node.image.uri);
    this.scrollview_ref.scrollTo({
      x: 0,
      y: this.imgArr[key],
      Animation: true,
    });
  };
  pickedCategory = (itemValue, itemIndex) => {
    let params = { first: 40, groupName: albums[itemIndex].title };

    setCategory(itemValue);

    CameraRoll.getPhotos(params).then((imgs) => {
      console.log(params);
      console.log(imgs);

      setImages(imgs.edges);
      setPickedImages(imgs.edges[0].node.image.uri);
    });
  };
  displayImages = () => {
    return images.map((item, key) => {
      return (
        <TouchableOpacity
          key={key}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            this.imgArr[key] = layout.y;
          }}
          onPress={() => {
            this.imagePressed(item, key);
          }}
        >
          <Image style={styles.image} source={{ uri: item.node.image.uri }} />
        </TouchableOpacity>
      );
    });
  };
  displayAssetCategories = () => {
    return albums.map((category, index) => {
      return <Picker.Item label={category.title} value={index} />;
    });
  };

  return (
    <Views style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <View>
            <Icon size={25} name="times" />
            <View style={styles.headerTitleWrapper}>
              <Picker
                mode={"dropdown"}
                selectedValue={this.state.category}
                style={{ height: 30, width: width / 2 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.pickedCategory(itemValue, itemIndex)
                }
              >
                {this.displayAssetCategories()}
              </Picker>
              {/*   <Text><Text style={styles.headerTitle}>Gallery</Text> <Icon name="caret-down"  /></Text> */}
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.headerSubtitle}>Next</Text>
            </View>
          </View>
        </View>
        <View>
          <View></View>
        </View>
      </View>

      <View>
        <Image
          style={styles.pickedImageWrapper}
          source={{ uri: pickedImages }}
        />
      </View>

      <ScrollView
        ref={(ref) => {
          this.ScrollView_ref = ref;
        }}
      >
        <View>{this.displayImages()}</View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.pickedFooterSection}>
          <Text style={styles.pickedFooterTitle}>GALLERY</Text>
        </View>
        <View styles={styles.footerSection}>
          <Text style={styles.footerTitle}>PHOTO</Text>
        </View>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>VIDEO</Text>
        </View>
      </View>
    </Views>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  headerLeftWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerTitleWrapper: {
    marginLeft: 15,
  },
  headerSubtitle: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
  },
  image: {
    width: width / 4.1,
    height: width / 4,
    padding: 1,
  },
  galleryImagesWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  pickedImageWrapper: {
    height: height / 2,
  },
});

export default GalleryScreen;
