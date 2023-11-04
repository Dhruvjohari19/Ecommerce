import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ButtonComponent = ({ text, handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FFA451",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    width: 327,
    height: 56,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Brandon Grotesque",
    fontsize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 24 /* 150% */,
    letterSpacing: "-0.16px",
  },
});

export default ButtonComponent;
