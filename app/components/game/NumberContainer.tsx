import Color from "@/app/constants/Color";
import { StyleSheet, Text, View } from "react-native";

const NumberContainer = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
export default NumberContainer;
