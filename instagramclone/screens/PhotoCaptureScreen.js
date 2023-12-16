import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RNCamera } from "react-native-camera";

const width = Dimensions.get("window").width;

const PhotoCaptureScreen = () => {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Icon size={25} name="times" />
          <View style={styles.headerTitleWrapper}>
            <Text>
              <Text style={styles.headerTitle}>Photo</Text>{" "}
              <Icon name="caret-down" />
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.previewWrapper}>
        <RNCamera
          ratio={"2:2"}
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style={styles.capture}
        >
          <Image
            style={styles.captureButton}
            source={require("../assets/images/takePhoto.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footerWrapper}>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>GALLERY</Text>
        </View>
        <View styles={styles.pickedFooterSection}>
          <Text style={styles.pickedFooterTitle}>PHOTO</Text>
        </View>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>VIDEO</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  headerContainer: {
    display: "flex",
    flex: 1,
    padding: 10,
  },
  previewWrapper: {
    display: "flex",
  },
  buttonWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
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
  footerSection: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  preview: {
    height: width,
  },
  captureButton: {
    width: width / 3,
    height: width / 3,
  },
});

export default PhotoCaptureScreen;
