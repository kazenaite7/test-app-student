import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    width: "100%",
    marginTop: 20,
  },
  buttonNext: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    width: "20%",
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "flex-end",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "left",
    marginLeft: 5,
  },
  buttonContainer: {
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between",
  }
});

export const Button = ({ text, onPress = () => { } }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);

export const ButtonNext = ({ text, onPress = () => { } }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonNext}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
