import { StyleSheet, View } from "react-native";
import Color from "../constants/Color";

const Card = ({ children }: any) => {
  return <View style={styles.inputContainer}>{children}</View>;
};
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    elevation: 4,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary500,
    shadowColor: "black",
    shadowOffset: { width: 8, height: 2 },
    shadowRadius: 6,
    borderRadius: 8,
    shadowOpacity: 0.25,
  },
});
export default Card;
