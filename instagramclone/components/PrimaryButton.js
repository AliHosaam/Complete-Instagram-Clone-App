import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const PrimaryButton = ({
  buttonLabel,
  buttonColor,
  textColor,
  onPressButton,
}) => {
  const buttonText = buttonLabel;
  const buttonBg = buttonColor;
  const labelColor = textColor;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressButton}
        style={[styles.button, { backgroundColor: buttonBg }]}
      >
        <Text style={[styles.text, { color: labelColor }]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
  },
  button: {
    padding: 15,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default PrimaryButton;
