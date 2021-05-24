import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#797979",
    paddingVertical: 15,
    width: "100%",
    marginTop: 20,
    borderColor: "#797979",
    borderWidth: 1
  },
  buttonNext: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    width: "20%",
    alignSelf: "flex-end",
    alignItems: "center",
    borderColor: '#797979',
    borderRadius: 10,
    marginBottom: 500
  },
  text: {
    color: "#515151",
    fontSize: 20,
    textAlign: "left",
    marginLeft: 5,
  },
  buttonContainer: {
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between",
    borderColor: '#797979',
    borderRadius: 10,
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
