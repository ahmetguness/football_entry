import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface TextButton {
  label: string;
  onPress: () => void;
}

const TextButton: React.FC<TextButton> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  root: {
    // height: 40,
    // width: 40,
  },
});
