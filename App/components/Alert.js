import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerEnd: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    backgroundColor: "#ff4136",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  circleCorrect: {
    backgroundColor: "#28A125"
  },
  icon: {
    width: screen.width / 3
  },
  square: {
    backgroundColor: "#FFFFFF",
    width: screen.width / 2,
    height: screen.width / 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#797979",
    borderWidth: 1
  }
});

export const Alert = ({ correct, visible }) => {
  if (!visible) return null;

  const icon = correct
    ? require("../assets/check.png")
    : require("../assets/close.png");

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};

export const AlertEnd = ({ correct, wrong, visible, onPress }) => {
  if (!visible) return null;

  const squareStyles = [styles.square];

  // if (correct) {
  //   squareStyles.push(styles.circleCorrect);
  // }

  return (
    <View style={styles.containerEnd}>
      <View style={squareStyles}>
        <Text>Rezultatai:</Text>
        <Text>Teisingai: {correct}</Text>
        <Text>Viso: {wrong}</Text>
      </View>
    </View>
  );
};
