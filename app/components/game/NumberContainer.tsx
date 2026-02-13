import Color from "@/app/constants/Color";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const NumberContainer = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.accent500,
    padding: deviceWidth > 380 ? 24 : 12,
    margin: deviceWidth > 380 ? 24 : 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.accent500,
    fontSize: deviceWidth > 380 ? 36 : 28,
    fontWeight: "bold",
  },
});
export default NumberContainer;
