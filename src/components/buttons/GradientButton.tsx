import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, GRADIENTCOLORS } from "../../theme/colors";

interface GradientButton {
  label: string;
  onPress: () => void;
}

const GradientButton: React.FC<GradientButton> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <LinearGradient
        colors={GRADIENTCOLORS}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.text} >{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  root: {
    borderRadius: 15,
    height: 50,
    width: "40%",
  },
  linearGradient: {
    flex: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.white
  }
});
