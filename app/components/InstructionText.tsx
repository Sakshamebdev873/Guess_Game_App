import React from "react";
import { StyleSheet, Text } from "react-native";
import Color from "../constants/Color";

type titleProps = {
  children: React.ReactNode;
  style?: any;
};
function InstructionText({ children, style }: titleProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  instructionText: {
    color: Color.accent500,
    fontSize: 24,
  },
});
export default InstructionText;
